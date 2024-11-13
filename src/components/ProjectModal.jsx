import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('prevent-scroll');
      setCurrentImageIndex(0);
      setIsImageLoading(true);

      const handleKeydown = (e) => handleKeyDown(e);
      document.addEventListener('keydown', handleKeydown);

      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
    } else {
      document.body.classList.remove('prevent-scroll');
    }

    return () => {
      document.body.classList.remove('prevent-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    if (project?.images) {
      const nextIndex = (currentImageIndex + 1) % project.images.length;
      const img = new Image();
      img.src = project.images[nextIndex];
    }
  }, [currentImageIndex, project]);

  const handleImageChange = useCallback(
    (direction) => {
      if (project?.images.length > 1) {
        setIsImageLoading(true);

        setCurrentImageIndex((prevIndex) => {
          if (direction === 'next') {
            return prevIndex === project.images.length - 1 ? 0 : prevIndex + 1;
          } else {
            return prevIndex === 0 ? project.images.length - 1 : prevIndex - 1;
          }
        });
      }
    },
    [project]
  );

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart) {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 50) {
        handleImageChange(diff > 0 ? 'next' : 'prev');
      }
      setTouchStart(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handleImageChange('prev');
    else if (e.key === 'ArrowRight') handleImageChange('next');
    else if (e.key === 'Escape') onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} tabIndex={0}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="slideshow-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className={`image-wrapper ${isImageLoading ? 'loading' : ''}`}>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="slideshow-image"
                onLoad={() => setIsImageLoading(false)}
                loading="eager"
              />
              {isImageLoading && (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              )}
            </div>

            <button
              className="nav-button prev"
              onClick={() => handleImageChange('prev')}
              disabled={isImageLoading}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} color="white" />
            </button>
            <button
              className="nav-button next"
              onClick={() => handleImageChange('next')}
              disabled={isImageLoading}
              aria-label="Next image"
            >
              <ChevronRight size={24} color="white" />
            </button>

            <div className="image-counter" aria-live="polite">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          <div className="content-section">
            <h2 className="project-title">{project.title}</h2>
            <p className="location">{project.location}</p>

            {project.description && (
              <div>
                <h3 className="section-title">About the Project</h3>
                <p className="project-description">{project.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

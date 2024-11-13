import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('prevent-scroll');
      setCurrentImageIndex(0); // Reset to the first image
      setIsImageLoading(true); // Reset loading state when modal opens
    } else {
      document.body.classList.remove('prevent-scroll');
    }
    
    return () => {
      document.body.classList.remove('prevent-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    // Preload next image
    if (project?.images) {
      const nextIndex = (currentImageIndex + 1) % project.images.length;
      const img = new Image();
      img.src = project.images[nextIndex];
    }
  }, [currentImageIndex, project]);

  if (!isOpen || !project) return null;

  const handleImageChange = (direction) => {
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => {
      if (direction === 'next') {
        return prev === project.images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? project.images.length - 1 : prev - 1;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleImageChange('next');
      } else {
        handleImageChange('prev');
      }
    }
    setTouchStart(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handleImageChange('prev');
    } else if (e.key === 'ArrowRight') {
      handleImageChange('next');
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="modal-container" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="modal-content">
          <div 
            className="slideshow-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
            <h2 className='project-title'>{project.title}</h2>
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
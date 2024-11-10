// ProjectModal.js
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('prevent-scroll');
    } else {
      document.body.classList.remove('prevent-scroll');
    }
    
    return () => {
      document.body.classList.remove('prevent-scroll');
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          <div className="slideshow-container">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="slideshow-image"
            />
            
            <button className="nav-button prev" onClick={prevImage}>
              <ChevronLeft size={24} color="white" />
            </button>
            <button className="nav-button next" onClick={nextImage}>
              <ChevronRight size={24} color="white" />
            </button>

            <div className="image-counter">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          <div className="content-section">
            <h2 className='project-title'>{project.title}</h2>
            <p className="location">{project.location}</p>
            
            {project.description && (
              <div>
                <h3 className="section-title">About the Project</h3>
                <p className="project-description" >{project.description}</p>
              </div>
            )}

            {/* {project.details && (
              <>
                <h3 className="section-title">Project Details</h3>
                <ul>
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
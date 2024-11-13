import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className = '' }) => {
    const [loaded, setLoaded] = useState(false);
    
    return (
        <div className={`image-wrapper ${className}`}>
            {/* Main image */}
            <img
                src={src}
                alt={alt}
                className={`main-image ${loaded ? 'fade-in' : ''}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

export default OptimizedImage;
import React, { useState } from 'react';
import defaultImage from '../../images/placeholders/portrait/portrait-1.png';
import './StaffImage.css';

const StaffImage = ({ src, alt, className = '', style = {} }) => {
  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  const handleClick = () => {
    if (imgSrc !== defaultImage) {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <img
        src={imgSrc}
        alt={alt}
        className={`staff-image ${className}`}
        style={{ objectFit: 'cover', cursor: 'pointer', ...style }}
        loading="lazy"
        onError={handleError}
        onClick={handleClick}
      />
      {showModal && (
        <div className="staff-image-modal" onClick={handleClose}>
          <div
            className="staff-image-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <img src={imgSrc} alt={alt} style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 12 }} />
            <button className="staff-image-modal-close" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffImage;

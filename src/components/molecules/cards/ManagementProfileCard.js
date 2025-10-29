import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * ManagementProfileCard molecule
 * Renders a two-column card with a text section and an image section.
 * The layout grid classes are passed in so callers can control placement.
 */
const ManagementProfileCard = (
  {
    name,
    subtitle,
    link,
    image,
    altText,
    ariaLabel,
    email,
    textClass,
    imageClass,
    imageClassName,
    containerAs,
  }
) => {
  const alt = altText || (subtitle ? `${name} — ${subtitle}` : name);
  const aria = ariaLabel || `Read more about ${name}`;
  const TextContainerTag = typeof containerAs === 'string' ? containerAs : (containerAs || 'div');
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="w-100">
      <article className={imageClass}>
        <figure className="shadow-5 w-100 mb2-00">
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt={alt}
            className={imageClassName || 'pa0-50 w-100 h-100'}
            style={{ cursor: 'pointer', minHeight: '380px', maxHeight: '480px', width: '100%', objectFit: 'cover' }}
            onClick={() => setShowModal(true)}
          />
        </figure>
        {showModal && (
          <div className="fixed top-0 left-0 w-100 h-100 flex items-center justify-center bg-black-80 z-9999" onClick={() => setShowModal(false)}>
            <div className="relative bg-white pa2-00 br0-25 shadow-5" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
              <img src={image} alt={alt} style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
              <button className="absolute top-0 right-0 pa0-50 bg-black white br0-25" style={{ cursor: 'pointer' }} onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </article>
      {React.createElement(TextContainerTag, { className: textClass },
        <>
          <h3 className="mb0-50">{name}</h3>
          {subtitle && <p className="mb0-50">{subtitle}</p>}
          {email && (
            <p className="mb0-50 f0-875">
              <a className="blue0" href={`mailto:${email}`}>{email}</a>
            </p>
          )}
          <div>
            <Link
              to={link}
              className="ba br0-25 mt2-00 blue0 pa0-25 f0-75"
              aria-label={aria}
            >
              Read More
            </Link>
          </div>
        </>
      )}
    </article>
  );
};

ManagementProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
  ariaLabel: PropTypes.string,
  email: PropTypes.string,
  textClass: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  containerAs: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

export default ManagementProfileCard;

import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const getShareUrl = () => window.location.href;

const ShareButtons = ({ title }) => {
  const url = getShareUrl();
  const text = encodeURIComponent(title || document.title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex ggap1-00 items-center mt1-00">
      <span className="f1-00 mr0-50"><FiShare2 /></span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ba br0-25 pa0-50 flex items-center"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="f1-25" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ba br0-25 pa0-50 flex items-center"
        aria-label="Share on Facebook"
      >
        <FaFacebookF className="f1-25" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ba br0-25 pa0-50 flex items-center"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn className="f1-25" />
      </a>
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ba br0-25 pa0-50 flex items-center"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="f1-25" />
      </a>
      <a
        href={`mailto:?subject=${text}&body=${encodedUrl}`}
        className="ba br0-25 pa0-50 flex items-center"
        aria-label="Share by Email"
      >
        <FaEnvelope className="f1-25" />
      </a>
    </div>
  );
};

export default ShareButtons;

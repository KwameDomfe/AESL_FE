
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, title, children, onClose, size = 'medium' }) => {
  const modalRef = useRef(null);

  // Focus trap and Escape key
  useEffect(() => {
    if (!isOpen) return;
    const node = modalRef.current;
    const focusable = node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (node) {
      node.addEventListener('keydown', handleKeyDown);
      first && first.focus();
    }
    return () => {
      if (node) {
        node.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isOpen, onClose]);

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className="modal-overlay"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`modal-content modal-size-${size}`}
        style={{
          background: '#fff',
          width: '90vw',
          maxWidth: size === 'full' ? '98vw' : size === 'large' ? '700px' : size === 'medium' ? '500px' : '350px',
          minHeight: '100px',
          maxHeight: '80vh',
          margin: '0 auto',
          padding: '2rem',
          borderRadius: '0.5rem',
          position: 'relative',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
        }}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full'])
};

export default Modal;

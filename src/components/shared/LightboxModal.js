import React, { useEffect } from 'react';

const LightboxModal = ({
  images = [],
  index = 0,
  captions = [],
  title,
  onClose,
  onPrev,
  onNext,
}) => {
  const total = images.length;
  const canShow = total > 0 && index >= 0 && index < total;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowLeft') onPrev && onPrev();
      if (e.key === 'ArrowRight') onNext && onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  if (!canShow) return null;

  const caption = captions[index] || title || '';

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
      }}
      onClick={(e) => {
        // close if clicking on backdrop only
        if (e.target === e.currentTarget) onClose && onClose();
      }}
    >
      {/* Controls */}
      <button
        aria-label="Close"
        onClick={onClose}
        style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 6, padding: '8px 10px', cursor: 'pointer'
        }}
      >
        ✕
      </button>
      <button
        aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); onPrev && onPrev(); }}
        style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 6, padding: '10px 12px', cursor: 'pointer' }}
      >
        ‹
      </button>
      <button
        aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}
        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 6, padding: '10px 12px', cursor: 'pointer' }}
      >
        ›
      </button>

      {/* Image */}
      <div style={{ maxWidth: '92vw', maxHeight: '82vh', textAlign: 'center' }}>
        <img
          src={images[index]}
          alt={caption || `Image ${index + 1}`}
          style={{ maxWidth: '100%', maxHeight: '74vh', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
        />
        <div style={{ color: '#f1f5f9', marginTop: 10, fontSize: 14 }}>
          <span>{index + 1} / {total}</span>
          {caption ? <span style={{ marginLeft: 12, opacity: 0.9 }}>{caption}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;

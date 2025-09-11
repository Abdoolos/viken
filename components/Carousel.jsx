import { useEffect, useState } from "react";

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div style={{
        height: '400px',
        background: 'var(--cl-light-1)',
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--cl-text-muted)',
        fontSize: '1.1rem'
      }}>
        Ingen bilder tilgjengelig ennå 📷
      </div>
    );
  }

  return (
    <div 
      style={{
        position: "relative", 
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-xl)",
        background: "white",
        border: "2px solid var(--cl-border)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main carousel container */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "450px",
        overflow: "hidden"
      }}>
        {images.map((src, idx) => (
          <div 
            key={idx} 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%", 
              height: "100%", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--cl-light-1)",
              opacity: idx === currentIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              zIndex: idx === currentIndex ? 2 : 1
            }}
          >
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              style={{
                maxWidth: "100%", 
                maxHeight: "100%", 
                objectFit: "contain",
                borderRadius: "var(--radius-lg)"
              }} 
              loading="lazy"
            />
            
            {/* Image overlay with number */}
            {idx === currentIndex && (
              <div style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-lg)",
                fontSize: "0.875rem",
                fontWeight: "600"
              }}>
                {idx + 1} / {images.length}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: `translateY(-50%) ${isHovered ? 'translateX(0)' : 'translateX(-70px)'}`,
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid var(--cl-border)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "var(--cl-primary)",
              transition: "all 0.3s ease",
              boxShadow: "var(--shadow-md)",
              zIndex: 10,
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? "auto" : "none"
            }}
          >
            ←
          </button>

          <button
            onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: `translateY(-50%) ${isHovered ? 'translateX(0)' : 'translateX(70px)'}`,
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid var(--cl-border)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "var(--cl-primary)",
              transition: "all 0.3s ease",
              boxShadow: "var(--shadow-md)",
              zIndex: 10,
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? "auto" : "none"
            }}
          >
            →
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "0.75rem 1rem",
          borderRadius: "var(--radius-xl)",
          backdropFilter: "blur(10px)",
          zIndex: 10
        }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: currentIndex === idx ? "24px" : "12px",
                height: "12px",
                borderRadius: "6px",
                border: "none",
                background: currentIndex === idx 
                  ? "white" 
                  : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

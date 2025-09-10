import { useEffect, useRef, useState } from "react";

export default function Carousel({ images = [] }) {
  const scrollerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || images.length <= 1) return;
    
    const intervalId = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex(prev => {
          const newIndex = (prev + 1) % images.length;
          el.scrollTo({
            left: newIndex * el.clientWidth,
            behavior: "smooth"
          });
          return newIndex;
        });
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images, isDragging]);

  const goToSlide = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    
    setCurrentIndex(index);
    el.scrollTo({
      left: index * el.clientWidth,
      behavior: "smooth"
    });
  };

  // Touch and mouse drag handlers
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const x = clientX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to nearest slide
    const el = scrollerRef.current;
    if (!el) return;
    
    const slideWidth = el.clientWidth;
    const newIndex = Math.round(el.scrollLeft / slideWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, images.length - 1));
    
    setCurrentIndex(clampedIndex);
    el.scrollTo({
      left: clampedIndex * slideWidth,
      behavior: "smooth"
    });
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
        border: "2px solid var(--cl-border)",
        cursor: isDragging ? "grabbing" : "grab"
      }}
    >
      {/* Main carousel container */}
      <div 
        ref={scrollerRef} 
        style={{
          display: "flex",
          scrollSnapType: "x mandatory",
          overflowX: "hidden",
          width: "100%",
          height: "450px",
          scrollBehavior: isDragging ? "auto" : "smooth"
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            style={{
              minWidth: "100%", 
              height: "100%", 
              position: "relative", 
              scrollSnapAlign: "start",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--cl-light-1)"
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
          </div>
        ))}
      </div>


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
          backdropFilter: "blur(10px)"
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


      {/* CSS for hover effects */}
      <style jsx>{`
        .carousel-btn:hover {
          background: white !important;
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--cl-primary) !important;
        }
        
        .carousel-btn:active {
          transform: translateY(-50%) scale(0.95) !important;
        }
      `}</style>
    </div>
  );
}

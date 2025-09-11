import settings from "../content/settings.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #ffffff 0%, var(--cl-light-1) 100%)',
      color: 'var(--cl-text)',
      padding: 'var(--spacing-2xl) 0 var(--spacing-lg)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--cl-border)'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
        `
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {/* Avatar placeholder */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: 'white',
                border: '3px solid var(--cl-border)',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-sm)'
              }}>
                VF
              </div>
              <div>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Viken Fade
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--cl-text-muted)'
                }}>
                  Herrefrisør i Viken
                </p>
              </div>
            </div>
            <p style={{
              color: 'var(--cl-text-muted)',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {settings.about}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--cl-dark-1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📞 Kontakt Oss
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="tel:45543838"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--cl-text)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'white',
                  border: '1px solid var(--cl-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="contact-link"
              >
                <span style={{ fontSize: '1.2rem' }}>📱</span>
                45543838
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--cl-dark-1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔗 Hurtiglenker
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="#gallery"
                style={{
                  color: 'var(--cl-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="footer-link"
              >
                🖼️ Galleri
              </a>
              <a
                href="tel:45543838"
                style={{
                  color: 'var(--cl-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="footer-link"
              >
                📞 Ring Oss
              </a>
              <a
                href="#prices"
                style={{
                  color: 'var(--cl-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="footer-link"
              >
                💰 Priser
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--cl-border), transparent)',
          margin: '2rem 0'
        }} />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            color: 'var(--cl-text-muted)',
            fontSize: '0.9rem'
          }}>
            © 2025 Viken Fade. Alle rettigheter forbeholdt. <a 
              href="https://abdoolos.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--cl-primary)',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              abdoolos.com
            </a>
          </div>
        </div>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .contact-link:hover {
          background: var(--cl-light-1) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--cl-primary) !important;
          color: var(--cl-primary) !important;
        }
        
        .footer-link:hover {
          color: var(--cl-primary) !important;
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  );
}

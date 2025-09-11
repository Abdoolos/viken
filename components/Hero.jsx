import settings from "../content/settings.json";

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #ffffff 0%, var(--cl-light-1) 100%)',
      color: 'var(--cl-text)',
      padding: '4rem 0 6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(185, 149, 74, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 185, 103, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(38, 34, 35, 0.04) 0%, transparent 50%)
        `,
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '1.5rem'
          }} className="animate-fade-in-up">
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 2
            }}>
              {settings.heroTitle}
            </h1>
            {/* Decorative underline */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '4px',
              background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
              borderRadius: '20px',
              opacity: 0.7
            }} />
          </div>
          
          <p style={{
            margin: '0 0 2.5rem',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            lineHeight: '1.6',
            color: 'var(--cl-text-muted)',
            fontWeight: '300',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }} className="animate-fade-in-up">
            {settings.heroSubtitle}
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }} className="animate-fade-in-up">
            <a 
              href="tel:+4745543838"
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(185, 149, 74, 0.3)',
                border: 'none'
              }}
            >
              📞 Ring Nå
            </a>
            
            <a 
              href="#gallery" 
              className="btn btn-secondary"
              style={{
                background: 'white',
                border: '2px solid var(--cl-primary)',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                color: 'var(--cl-primary)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(185, 149, 74, 0.2)'
              }}
            >
              🖼️ Se Galleri
            </a>
          </div>
          
          {/* Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'white',
              border: '2px solid var(--cl-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-md)'
            }} className="card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✂️</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: 'var(--cl-dark-1)' }}>
                Profesjonell Service
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cl-text-muted)', margin: 0 }}>
                Ekspert på klassiske og moderne fades
              </p>
            </div>
            
            <div style={{
              background: 'white',
              border: '2px solid var(--cl-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-md)'
            }} className="card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕐</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: 'var(--cl-dark-1)' }}>
                Drop-in Velkommen
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cl-text-muted)', margin: 0 }}>
                Ingen timebestilling nødvendig
              </p>
            </div>
            
            <div style={{
              background: 'white',
              border: '2px solid var(--cl-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-md)'
            }} className="card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: 'var(--cl-dark-1)' }}>
                Høy Kvalitet
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cl-text-muted)', margin: 0 }}>
                Beste service i Viken området
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}

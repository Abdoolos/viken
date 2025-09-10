export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, var(--cl-dark-1), var(--cl-dark-2))',
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Avatar placeholder - يمكن استبداله بصورة myimage1 لاحقاً */}
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            VF
          </div>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Viken Fade
            </h1>
            <p style={{
              margin: 0,
              fontSize: '0.875rem',
              opacity: 0.8,
              color: '#cbd5e1'
            }}>
              Herrefrisør i Viken
            </p>
          </div>
        </div>
        
      </div>
    </header>
  );
}

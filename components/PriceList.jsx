import settings from "../content/settings.json";

export default function PriceList() {
  const p = settings.prices || {};
  
  const services = [
    {
      icon: "✂️",
      name: "Klipp",
      description: "Profesjonell herreklipp med moderne teknikker",
      price: p.hair,
      popular: false
    },
    {
      icon: "🧔",
      name: "Skjegg",
      description: "Trimming og forming av skjegg",
      price: p.beard,
      popular: false
    },
    {
      icon: "⭐",
      name: "Klipp + Skjegg",
      description: "Komplett makeover - vårt mest populære tilbud",
      price: p.hairBeard,
      popular: true
    },
    {
      icon: "🧵",
      name: "Tråd",
      description: "Presise linjer og detaljer",
      price: p.threading,
      popular: false
    },
    {
      icon: "✨",
      name: "Voks",
      description: "Smooth finish og rene linjer",
      price: p.wax,
      popular: false
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #ffffff 0%, var(--cl-light-1) 100%)',
      color: 'var(--cl-text)',
      padding: 'var(--spacing-2xl) 0',
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
          radial-gradient(circle at 10% 20%, rgba(185, 149, 74, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(212, 185, 103, 0.03) 0%, transparent 50%)
        `
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--cl-dark-1)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              💰 Våre Priser
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--cl-text-muted)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Transparente priser for kvalitetstjenester. Ingen skjulte kostnader.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {services.map((service, index) => (
              <div
                key={service.name}
                style={{
                  background: service.popular 
                    ? 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))' 
                    : 'white',
                  backdropFilter: 'blur(10px)',
                  border: service.popular 
                    ? '2px solid rgba(185, 149, 74, 0.5)' 
                    : '2px solid var(--cl-border)',
                  boxShadow: 'var(--shadow-md)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
                className="card"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    transform: 'rotate(12deg)',
                    boxShadow: 'var(--shadow-lg)'
                  }}>
                    POPULÆR
                  </div>
                )}

                {/* Service Icon */}
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  filter: service.popular ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'none'
                }}>
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: service.popular ? 'white' : 'var(--cl-dark-1)'
                }}>
                  {service.name}
                </h3>

                {/* Service Description */}
                <p style={{
                  fontSize: '1rem',
                  color: service.popular ? 'rgba(255,255,255,0.9)' : 'var(--cl-text-muted)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}>
                  {service.description}
                </p>

                {/* Price */}
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: service.popular ? '#fff' : 'var(--cl-primary)',
                  marginBottom: '1rem',
                  textShadow: service.popular ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
                }}>
                  {service.price}
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: service.popular ? 'rgba(255,255,255,0.8)' : 'var(--cl-text-muted)',
                    marginLeft: '0.5rem'
                  }}>
                    kr
                  </span>
                </div>

                {/* Book Button */}
                <a
                            href="tel:+4745543838"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: service.popular 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-lg)',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: service.popular ? '2px solid rgba(255,255,255,0.3)' : 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                  className="btn"
                >
                  📞 Bestill Nå
                </a>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div style={{
            background: 'white',
            border: '2px solid var(--cl-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ 
                  color: 'var(--cl-secondary)', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  💳 Betaling
                </h4>
                <p style={{ color: 'var(--cl-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  kort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

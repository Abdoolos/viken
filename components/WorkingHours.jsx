import settings from "../content/settings.json";

export default function WorkingHours() {
  const workingHours = settings.workingHours;
  
  const workingDays = [
    { day: 'Mandag', hours: workingHours.regular.monday.replace('-', ' - '), isOpen: workingHours.regular.monday !== 'Stengt' },
    { day: 'Tirsdag', hours: workingHours.regular.tuesday.replace('-', ' - '), isOpen: workingHours.regular.tuesday !== 'Stengt' },
    { day: 'Onsdag', hours: workingHours.regular.wednesday.replace('-', ' - '), isOpen: workingHours.regular.wednesday !== 'Stengt' },
    { day: 'Torsdag', hours: workingHours.regular.thursday.replace('-', ' - '), isOpen: workingHours.regular.thursday !== 'Stengt' },
    { day: 'Fredag', hours: workingHours.regular.friday.replace('-', ' - '), isOpen: workingHours.regular.friday !== 'Stengt' },
    { day: 'Lørdag', hours: workingHours.regular.saturday.replace('-', ' - '), isOpen: workingHours.regular.saturday !== 'Stengt' },
    { day: 'Søndag', hours: workingHours.regular.sunday, isOpen: workingHours.regular.sunday !== 'Stengt' }
  ];

  const getCurrentDay = () => {
    const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    return days[new Date().getDay()];
  };

  const isCurrentlyOpen = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = getCurrentDay();
    const todaySchedule = workingDays.find(d => d.day === currentDay);
    
    if (!todaySchedule || !todaySchedule.isOpen) return false;
    return currentHour >= 10 && currentHour < 19;
  };

  const currentDay = getCurrentDay();
  const isOpen = isCurrentlyOpen();

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--cl-light-1) 0%, #ffffff 100%)',
      padding: 'var(--spacing-2xl) 0',
      position: 'relative'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
        borderRadius: '50%',
        opacity: 0.05,
        filter: 'blur(40px)'
      }} />
      
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
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
              🕐 Åpningstider
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--cl-text-muted)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Vi er her for deg gjennom hele uken med fleksible timer
            </p>
          </div>

          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-xl)',
            background: isOpen 
              ? 'linear-gradient(135deg, var(--cl-success), #059669)' 
              : 'linear-gradient(135deg, var(--cl-error), #dc2626)',
            color: 'white',
            fontWeight: '600',
            fontSize: '1rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-lg)',
            animation: isOpen ? 'pulse 2s infinite' : 'none'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'white',
              animation: isOpen ? 'blink 1.5s infinite' : 'none'
            }} />
            {isOpen ? 'Åpent nå' : 'Stengt nå'}
          </div>

          {/* Working Hours Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {workingDays.map((schedule, index) => (
              <div
                key={schedule.day}
                style={{
                  background: schedule.day === currentDay 
                    ? 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))' 
                    : 'white',
                  color: schedule.day === currentDay ? 'white' : 'var(--cl-dark-1)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: schedule.day === currentDay 
                    ? 'none' 
                    : '2px solid var(--cl-border)',
                  boxShadow: schedule.day === currentDay 
                    ? 'var(--shadow-xl)' 
                    : 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  transform: schedule.day === currentDay ? 'scale(1.05)' : 'scale(1)',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                className="card"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {schedule.day === currentDay && (
                      <span style={{ fontSize: '1.2rem' }}>📍</span>
                    )}
                    {schedule.day}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    fontSize: '1rem',
                    opacity: schedule.isOpen ? 1 : 0.8,
                    color: schedule.day === currentDay ? 'white' : 'var(--cl-dark-1)'
                  }}>
                    {schedule.hours}
                  </div>
                </div>
                {!schedule.isOpen && (
                  <div style={{
                    fontSize: '0.875rem',
                    marginTop: '0.5rem',
                    opacity: 0.8,
                    fontStyle: 'italic',
                    color: schedule.day === currentDay ? 'white' : 'var(--cl-text-muted)'
                  }}>
                    Hviledag - Vi sees i morgen! 😊
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div style={{
            background: 'white',
            color: 'var(--cl-text)',
            padding: '2rem',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--cl-border)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)',
              animation: 'shine 3s infinite'
            }} />
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--cl-dark-1)'
            }}>
              📞 Kom innom når det passer deg!
            </h3>
            <p style={{
              fontSize: '1rem',
              marginBottom: '1.5rem',
              color: 'var(--cl-text-muted)'
            }}>
              Drop-in service - ingen timebestilling nødvendig
            </p>
            <a
                    href="tel:+4745543838"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, var(--cl-secondary), #f97316)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 'var(--radius-lg)',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
              }}
              className="btn"
            >
              <span style={{ fontSize: '1.2rem' }}>📱</span>
              Ring +47 455 43 838
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
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

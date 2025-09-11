export default function PaymentInfo() {
  return (
    <section style={{
      padding: "var(--spacing-2xl) 0",
      background: "linear-gradient(135deg, var(--cl-primary) 0%, var(--cl-accent) 100%)",
      color: "white",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
        `
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "800",
            marginBottom: "1.5rem",
            color: "white"
          }}>
            💳 Betalingsinformasjon
          </h2>
          
          <div style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            marginBottom: "2rem"
          }}>
            <div style={{
              fontSize: "3rem",
              marginBottom: "1rem"
            }}>
              💳
            </div>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "white"
            }}>
              Kun Kortbetaling
            </h3>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "1.5rem"
            }}>
              Vi aksepterer kun betaling med kort. Kontanter ikke akseptert.
            </p>
          </div>
          
          {/* Additional Info */}
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.15)"
          }}>
            <h4 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "0.75rem",
              color: "white"
            }}>
              ℹ️ Viktig informasjon
            </h4>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              textAlign: "left"
            }}>
              <li style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.9)"
              }}>
                ✓ Alle kort med chip og PIN aksepteres
              </li>
              <li style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.9)"
              }}>
                ✓ Kontaktløs betaling under 500kr
              </li>
              <li style={{
                padding: "0.5rem 0",
                color: "rgba(255, 255, 255, 0.9)"
              }}>
                ✓ Vipps betaling tilgjengelig
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

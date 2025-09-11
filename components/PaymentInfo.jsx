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
            border: "1px solid rgba(255, 255, 255, 0.2)"
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
              Alle kort
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

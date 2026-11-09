import { useEffect, useState } from "react";

const REOPEN_DATE = new Date("2026-11-16T00:00:00+01:00");

export default function ClosedOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (new Date() >= REOPEN_DATE) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }}>
      <h1 style={{
        margin: 0,
        textAlign: "center",
        fontSize: "clamp(2rem, 6vw, 4rem)",
        fontWeight: 800,
        lineHeight: 1.2,
        color: "var(--cl-dark-1)"
      }}>
        Stengt for reise til 15. november
      </h1>
    </div>
  );
}

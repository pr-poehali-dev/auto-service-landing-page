import { useEffect, useRef } from "react";

export default function SubliminalFlash() {
  const visibleRef = useRef(false);
  const frameRef = useRef(0);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;

    const tick = () => {
      frameRef.current += 1;

      if (frameRef.current >= 60) {
        frameRef.current = 0;

        if (elRef.current) {
          elRef.current.style.opacity = "1";
        }

        // Один кадр (~16ms) — потом скрываем
        requestAnimationFrame(() => {
          if (elRef.current) {
            elRef.current.style.opacity = "0";
          }
        });
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={elRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontSize: "clamp(2.5rem, 8vw, 7rem)",
          fontFamily: "Oswald, sans-serif",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.12)",
          textAlign: "center",
          lineHeight: 1.1,
          whiteSpace: "nowrap",
        }}
      >
        Запишись на сервис
        <br />
        прямо сейчас
      </span>
    </div>
  );
}

import { useEffect, useState } from "react";

const EMOJIS = ["💜", "💖", "🩵", "🌸", "✨", "🎀"];
const LIFETIME_MS = 12000;

// Falling emoji background. Lives in its own component so the
// timer re-renders only this layer, not the whole page.
export default function Hearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Respect users who prefer less motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let nextId = 0;
    const timeouts = new Set();

    const timer = setInterval(() => {
      const id = nextId++;
      const heart = {
        id,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        style: {
          left: `${Math.random() * 100}vw`,
          fontSize: `${14 + Math.random() * 18}px`,
          animationDuration: `${6 + Math.random() * 6}s`,
          "--sway": `${Math.random() * 60 - 30}px`,
        },
      };
      setHearts((list) => [...list, heart]);

      const t = setTimeout(() => {
        setHearts((list) => list.filter((h) => h.id !== id));
        timeouts.delete(t);
      }, LIFETIME_MS);
      timeouts.add(t);
    }, 500);

    return () => {
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span key={h.id} style={h.style}>
          {h.emoji}
        </span>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";

const MAX_PETALS = 40;

// Falling cherry blossom petals. Kept in its own component so the
// timer only re-renders this layer, not the whole page.
export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let nextId = 0;
    const timer = setInterval(() => {
      if (document.hidden) return;
      const size = 10 + Math.random() * 10;
      const petal = {
        id: nextId++,
        style: {
          left: `${Math.random() * 100}vw`,
          width: `${size}px`,
          height: `${size * 1.3}px`,
          animationDuration: `${7 + Math.random() * 7}s`,
          "--dx": `${Math.random() * 160 - 80}px`,
          "--rot": `${Math.random() * 720 - 360}deg`,
        },
      };
      setPetals((list) => (list.length >= MAX_PETALS ? list : [...list, petal]));
    }, 450);

    return () => clearInterval(timer);
  }, []);

  const remove = (id) => setPetals((list) => list.filter((p) => p.id !== id));

  return (
    <div id="petals" aria-hidden="true">
      {petals.map((p) => (
        <div key={p.id} className="petal" style={p.style} onAnimationEnd={() => remove(p.id)} />
      ))}
    </div>
  );
}

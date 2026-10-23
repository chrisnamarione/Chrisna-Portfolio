import { useEffect, useState } from "react";
import Petals from "./components/Petals.jsx";
import Hero from "./components/Hero.jsx";
import Home from "./components/Home.jsx";
import ActivityPage from "./components/ActivityPage.jsx";
import { activities } from "./data/activities.js";

// The current page lives in the URL hash (#activity3): the browser's Back
// button works and every activity can be linked directly. No hash = home.
const idFromHash = () => {
  const id = window.location.hash.replace("#", "");
  return activities.some((a) => a.id === id) ? id : null;
};

const savedTheme = () => {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

export default function App() {
  const [activeId, setActiveId] = useState(idFromHash);
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    const onHashChange = () => setActiveId(idFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeId]);

  // Apply + remember the theme (the CSS reads data-theme on <html>)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage can be blocked; the theme still works for this visit */
    }
  }, [theme]);

  // Dark mode: on a tap (no hover on phones) let the card / Back button glow
  // for a moment before the page changes, so the glow is actually seen.
    // Dark mode: on a tap (no hover on phones) let the card / Back button glow
  // for a moment before the page changes, so the glow is actually seen.
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest("a.open, a.back");
      if (!el || document.documentElement.dataset.theme !== "dark") return;
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const card = el.closest(".card");
      el.classList.add("glow");
      card?.classList.add("glow"); // show the glow, then open the page
      setTimeout(() => {
        el.classList.remove("glow");
        card?.classList.remove("glow");
        window.location.hash = el.getAttribute("href").slice(1);
      }, 450);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  
  const activity = activities.find((a) => a.id === activeId);

  return (
    <>
      <Petals />
      <Hero />
      <main>
        {activity ? (
          <ActivityPage key={activity.id} activity={activity} />
        ) : (
          <Home />
        )}
      </main>
    </>
  );
}
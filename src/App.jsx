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

export default function App() {
  const [activeId, setActiveId] = useState(idFromHash);

  useEffect(() => {
    const onHashChange = () => setActiveId(idFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeId]);

  const activity = activities.find((a) => a.id === activeId);

  return (
    <>
      <Petals />
      <Hero />
      <main>
        {activity ? <ActivityPage key={activity.id} activity={activity} /> : <Home />}
      </main>
    </>
  );
}
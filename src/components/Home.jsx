import ActivityCard from "./ActivityCard.jsx";
import { activities, profile } from "../data/activities.js";

export default function Home() {
  return (
    <section aria-labelledby="home-title">
      <div className="home-head">
        <h2 id="home-title" className="script">My Activities</h2>
        <span className="course-tag">{profile.course}</span>
      </div>
      <p className="hint">Follow the branch and tap “View my work” to open an activity.</p>

      <ol className="path">
        {activities.map((a) => (
          <ActivityCard key={a.id} activity={a} />
        ))}
      </ol>
    </section>
  );
}

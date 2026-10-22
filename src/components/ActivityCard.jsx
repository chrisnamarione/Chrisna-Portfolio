// One blossom on the branch. Only the "View my work" link is clickable
// (it's a real link, #activity3, so it works with keyboard and the Back button).
export default function ActivityCard({ activity }) {
  const { id, title, highlight } = activity;

  return (
    <li className={highlight ? "highlight" : undefined}>
      <span className="node" aria-hidden="true">🌸</span>
      <div className="card">
        <span className="name">{title}</span>
        <a className="open" href={`#${id}`} aria-label={`View my work: ${title}`}>
          View my work
        </a>
      </div>
    </li>
  );
}
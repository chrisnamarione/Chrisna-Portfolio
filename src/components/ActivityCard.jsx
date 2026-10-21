export default function ActivityCard({ activity }) {
  const { id, label, title, highlight } = activity;

  return (
    <li className={highlight ? "highlight" : undefined}>
      <span className="node" aria-hidden="true">🌸</span>
      <a className="card" href={`#${id}`}>
        <span className="tag">{label}</span>
        <span className="name">{title}</span>
        <span className="open">View my work</span>
      </a>
    </li>
  );
}
// One blossom on the branch. It's a real link (#activity3), so it works
// with keyboard, middle-click, and the browser's Back button.
export default function ActivityCard({ activity }) {
  const { id, label, title, desc, highlight } = activity;

  return (
    <li className={highlight ? "highlight" : undefined}>
      <span className="node" aria-hidden="true">🌸</span>
      <a className="card" href={`#${id}`}>
        <span className="tag">{label}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="open">View my work</span>
      </a>
    </li>
  );
}

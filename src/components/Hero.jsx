import { profile } from "../data/activities.js";

export default function Hero() {
  return (
    <header className="hero">
      <svg className="branch" viewBox="0 0 260 150" aria-hidden="true">
        <path d="M260 8 C190 20 150 50 110 85 S40 130 0 140" fill="none" stroke="#9b6475" strokeWidth="5" strokeLinecap="round" />
        <path d="M200 28 C185 50 170 58 150 62 M140 66 C128 90 112 98 96 100" fill="none" stroke="#9b6475" strokeWidth="3" strokeLinecap="round" />
        <g fill="#f7a8c4">
          <circle cx="215" cy="24" r="14" />
          <circle cx="150" cy="62" r="12" />
          <circle cx="96" cy="100" r="13" />
          <circle cx="170" cy="48" r="9" />
          <circle cx="60" cy="122" r="10" />
        </g>
        <g fill="#fff3f7">
          <circle cx="215" cy="24" r="4" />
          <circle cx="150" cy="62" r="3.5" />
          <circle cx="96" cy="100" r="4" />
          <circle cx="60" cy="122" r="3" />
        </g>
      </svg>
      <h1>My E-Portfolio</h1>
      <p className="welcome">{profile.welcome}</p>
    </header>
  );
}

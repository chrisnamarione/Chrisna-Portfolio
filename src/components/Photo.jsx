import { useState } from "react";
import { imageUrl } from "../data/activities.js";

// Shows the photo, or a friendly note if the file hasn't been added yet.
// With `href`, the photo becomes a link (opens the Facebook post in a new tab).
export default function Photo({ file, alt, href }) {
  const [failed, setFailed] = useState(false);

  const image = (
    <img src={imageUrl(file)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  );

  return (
    <figure className="photo">
      {failed ? (
        <div className="photo-missing" role="img" aria-label={alt}>
          Image not found: {file.startsWith("http") ? "check the link" : `public/images/${file}`}
        </div>
      ) : href ? (
        <a
          className="photo-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${alt}: watch on Facebook (opens in a new tab)`}
        >
          {image}
          <svg className="play" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="32" fill="#c2456f" fillOpacity="0.92" />
            <path d="M26 20 L46 32 L26 44 Z" fill="#fff" />
          </svg>
          <span className="watch">Watch on Facebook</span>
        </a>
      ) : (
        image
      )}
    </figure>
  );
}
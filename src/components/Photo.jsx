import { useState } from "react";
import { imageUrl } from "../data/activities.js";

// Shows the photo, or a friendly note if the file hasn't been added yet.
export default function Photo({ file, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="photo">
      {failed ? (
        <div className="photo-missing" role="img" aria-label={alt}>
          Image not found: {file.startsWith("http") ? "check the link" : `public/images/${file}`}
        </div>
      ) : (
        <img src={imageUrl(file)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </figure>
  );
}

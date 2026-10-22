import { useEffect, useRef } from "react";
import Photo from "./Photo.jsx";

export default function ActivityPage({ activity }) {
  const headingRef = useRef(null);
  const { full, title, desc, learn, photos = [] } = activity;

  // Move keyboard / screen-reader focus to the new page's heading
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [activity.id]);

  return (
    <article className="page">
      <h2 ref={headingRef} className="script" tabIndex={-1}>{full}</h2>

      {(desc || learn) && (
        <div className="notes">
          {desc && (
            <div className="note">
              <p>{desc}</p>
            </div>
          )}
          {learn && (
            <div className="note">
              <h3>My Learning</h3>
              <p>{learn}</p>
            </div>
          )}
        </div>
      )}

      <div className="photos">
        {photos.map((file, i) => (
          <Photo key={file} file={file} alt={`${title}, photo ${i + 1}`} />
        ))}
      </div>

      <a className="back" href="#">Back to home</a>
    </article>
  );
}
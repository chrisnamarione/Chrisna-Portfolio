import { useEffect, useRef } from "react";
import Photo from "./Photo.jsx";
import Video from "./Video.jsx";

export default function ActivityPage({ activity }) {
  const headingRef = useRef(null);
  const { full, title, desc, learn, video, link, photos = [] } = activity;
  // Only real web links count (so an unfilled placeholder never makes a broken link)
  const href = typeof link === "string" && link.startsWith("http") ? link : undefined;
  // `facebook: true` means "use this activity's link as the video"
  const videoInfo = video && video.facebook === true ? { ...video, facebook: href } : video;

  // Move keyboard / screen-reader focus to the new page's heading
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [activity.id]);

  return (
    <article className="page">
      <h2 ref={headingRef} className="script" tabIndex={-1}>{full}</h2>

      {/* The cherry blossom garland wraps around everything inside .bloom */}
      <div className="bloom">
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

        {photos.length > 0 && (
          <div className="photos">
            {photos.map((file, i) => (
              <Photo key={file} file={file} alt={`${title}, photo ${i + 1}`} href={href} />
            ))}
          </div>
        )}

        {videoInfo && <Video video={videoInfo} title={title} />}
      </div>

      <a className="back" href="#">Back to home</a>
    </article>
  );
}
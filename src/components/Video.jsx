import { useState } from "react";
import { imageUrl, videoUrl } from "../data/activities.js";

// A video file from /public/videos, or an embedded YouTube / Drive player.
export default function Video({ video, title }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="video">
      {video.embed ? (
        <iframe
          src={video.embed}
          title={`${title} video`}
          loading="lazy"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      ) : failed ? (
        <div className="photo-missing">Video not found: public/videos/{video.src}</div>
      ) : (
        <video
          src={videoUrl(video.src)}
          poster={video.poster ? imageUrl(video.poster) : undefined}
          controls
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        >
          Your browser can’t play this video.
        </video>
      )}
    </figure>
  );
}
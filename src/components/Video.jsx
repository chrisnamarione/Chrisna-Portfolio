import { useState } from "react";
import { imageUrl, videoUrl } from "../data/activities.js";

// Facebook's own player, so the video plays right here from your post.
const facebookEmbed = (url) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=560`;

// A video file from /public/videos, an embedded YouTube link, or a Facebook post.
export default function Video({ video, title }) {
  const [failed, setFailed] = useState(false);

  const embed =
    video.embed ||
    (typeof video.facebook === "string" && video.facebook.startsWith("http")
      ? facebookEmbed(video.facebook)
      : null);

  if (!embed && !video.src) return null; // nothing to show yet

  return (
    <figure className="video">
      {embed ? (
        <iframe
          src={embed}
          title={`${title} video`}
          loading="lazy"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
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
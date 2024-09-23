import React from "react";
import Window from "./Window"; // Import the new Window component

type YouTubeEmbedProps = {
  videoId: string;
  onClose: () => void; // Add onClose prop to handle closing
};

const MediaPlayer = ({ videoId, onClose }: YouTubeEmbedProps) => {
  return (
    <Window title="VLC" onClose={onClose}>
      <div className="h-full w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Window>
  );
};

export default MediaPlayer;

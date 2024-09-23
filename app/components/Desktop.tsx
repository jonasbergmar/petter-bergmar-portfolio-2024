"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Browser from "./Browser";
import MediaPlayer from "./MediaPlayer";
import Wallpaper from "./Wallpaper";
import ProgramShortcut from "./ProgramShortcut";
import Folder from "./Folder";

const Desktop = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  // State to handle opening of windows
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isMediaPlayerOpen, setIsMediaPlayerOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  // Track z-indices
  const [zIndices, setZIndices] = useState({
    browser: 1,
    mediaPlayer: 1,
    folder: 1,
  });

  // Adjust z-index of windows to bring the clicked one to the front
  const bringToFront = (windowType: "browser" | "mediaPlayer" | "folder") => {
    setZIndices((prev) => {
      // Find the current highest z-index across all windows
      const maxZIndex = Math.max(...Object.values(prev));
      return {
        ...prev,
        [windowType]: maxZIndex + 1, // Increment the z-index of the clicked window
      };
    });
  };

  return (
    <div ref={parentRef} className="relative h-screen w-screen">
      <Header />
      <Wallpaper />

      <nav className="absolute bottom-0 left-0 p-4 md:top-11">
        <div className="flex gap-4 sm:flex-col">
          <ProgramShortcut
            logo="/safari logo.png"
            name="Safari"
            onClick={() => {
              setIsBrowserOpen(true);
              bringToFront("browser"); // Bring browser to the front
            }}
          />
          <ProgramShortcut
            logo="/vlc.png"
            name="VLC"
            onClick={() => {
              setIsMediaPlayerOpen(true);
              bringToFront("mediaPlayer"); // Bring media player to the front
            }}
          />
          <ProgramShortcut
            logo="/Folder.png"
            name="Folder"
            onClick={() => {
              setIsFolderOpen(true);
              bringToFront("folder"); // Bring folder to the front
            }}
          />
        </div>
      </nav>

      {/* Browser Window */}
      {isBrowserOpen && (
        <motion.div
          drag
          dragMomentum={false}
          className="absolute right-4 top-24 m-4 mx-auto h-80 w-96 md:left-64 md:h-[300px] md:w-[500px] xl:h-[768px] xl:w-[1024px]"
          style={{ zIndex: zIndices.browser }} // Set z-index for browser window
          onMouseDown={() => bringToFront("browser")} // Update z-index on mouse down
        >
          <Browser onClose={() => setIsBrowserOpen(false)} />
        </motion.div>
      )}

      {/* MediaPlayer Window */}
      {isMediaPlayerOpen && (
        <motion.div
          drag
          dragMomentum={false}
          className="absolute left-4 top-44 m-4 mx-auto h-80 w-96 md:right-64 md:h-[768px] md:w-[1024px]"
          style={{ zIndex: zIndices.mediaPlayer }} // Set z-index for media player window
          onMouseDown={() => bringToFront("mediaPlayer")} // Update z-index on mouse down
        >
          <MediaPlayer
            videoId="A1Ot83qM2Cg"
            onClose={() => setIsMediaPlayerOpen(false)} // Close function
          />
        </motion.div>
      )}

      {/* Folder Window */}
      {isFolderOpen && (
        <motion.div
          drag
          dragMomentum={false}
          className="absolute left-4 top-64 m-4 mx-auto h-80 w-96 md:right-44 md:h-[400px] md:w-[400px]"
          style={{ zIndex: zIndices.folder }} // Set z-index for folder window
          onMouseDown={() => bringToFront("folder")} // Update z-index on mouse down
        >
          <Folder
            onClose={() => setIsFolderOpen(false)} // Close function
          />
        </motion.div>
      )}
    </div>
  );
};

export default Desktop;

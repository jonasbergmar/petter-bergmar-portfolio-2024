"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ContextMenu from "./ContextMenu";

export type Theme = {
  name: string;
  backgroundImage: string;
};

const themes: Theme[] = [
  {
    name: "Blue Macintosh",
    backgroundImage: "/wallpaper blue.jpg",
  },
  {
    name: "Green Macintosh",
    backgroundImage: "/wallpaper green.jpg",
  },
  {
    name: "Purple Macintosh",
    backgroundImage: "/wallpape purple.jpg",
  },
  {
    name: "Rose Macintosh",
    backgroundImage: "/wallpaper rose.jpg",
  },
];

export default function Wallpaper() {
  const [currentTheme, setCurrentTheme] = useState<number>(0);
  const [contextMenuVisible, setContextMenuVisible] = useState<boolean>(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const wallpaperRef = useRef<HTMLDivElement>(null);

  const switchTheme = (index: number): void => {
    if (index !== currentTheme) {
      setCurrentTheme(index);
    }
    setContextMenuVisible(false);
  };

  const handleContextMenu = (event: React.MouseEvent): void => {
    event.preventDefault();
    const rect = wallpaperRef.current?.getBoundingClientRect();
    if (rect) {
      setContextMenuPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
    setContextMenuVisible(true);
  };

  const handleClickOutside = (): void => {
    setContextMenuVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const theme: Theme = themes[currentTheme];

  return (
    <div
      className="relative h-svh w-full overflow-hidden"
      onContextMenu={handleContextMenu}
      ref={wallpaperRef}
    >
      <Image
        key={theme.backgroundImage}
        src={theme.backgroundImage}
        alt={theme.name}
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <ContextMenu
        visible={contextMenuVisible}
        position={contextMenuPosition}
        themes={themes}
        onThemeSelect={switchTheme}
        onClose={() => setContextMenuVisible(false)}
      />
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import ContextMenu from "./ContextMenu";

export type Theme = {
  name: string;
  backgroundColor: string;
};

const themes: Theme[] = [
  {
    name: "Platinum Gray",
    backgroundColor: "#C0C0C0",
  },
  {
    name: "Light Blue",
    backgroundColor: "#A3C9F1",
  },
  {
    name: "Beige",
    backgroundColor: "#E0D0B0",
  },
  {
    name: "Dark Gray",
    backgroundColor: "#808080",
  },
  {
    name: "Soft Green",
    backgroundColor: "#98FB98",
  },
];

const Wallpaper: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<number>(0);
  const [contextMenuVisible, setContextMenuVisible] = useState<boolean>(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const wallpaperRef = useRef<HTMLDivElement>(null);

  const switchTheme = (index: number): void => {
    setCurrentTheme(index);
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
      className="absolute h-screen w-full"
      style={{
        backgroundColor: theme.backgroundColor,
      }}
      onContextMenu={handleContextMenu}
      ref={wallpaperRef}
    >
      <ContextMenu
        visible={contextMenuVisible}
        position={contextMenuPosition}
        themes={themes}
        onThemeSelect={switchTheme}
        onClose={() => setContextMenuVisible(false)}
      />
    </div>
  );
};

export default Wallpaper;

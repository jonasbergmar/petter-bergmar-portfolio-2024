import React, { useState, useEffect } from "react";
import type { Theme } from "./Wallpaper";

type ContextMenuProps = {
  visible: boolean;
  position: { x: number; y: number };
  themes: Theme[];
  onThemeSelect: (index: number) => void;
  onClose: () => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  position,
  themes,
  onThemeSelect,
  onClose,
}) => {
  const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".context-menu")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  if (!visible) return null;

  return (
    <ul
      className="context-menu absolute z-50 m-0 border border-green-200 bg-black p-0 shadow-lg"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "150px",
      }}
    >
      <li
        className="relative cursor-pointer"
        onMouseEnter={() => setSubMenuVisible(true)}
        onMouseLeave={() => setSubMenuVisible(false)}
      >
        <div className="flex items-center justify-between p-4 text-green-200 hover:bg-gray-500">
          Theme
          <div className="h-4 w-4 rotate-45 transform border-r border-t border-green-200" />
        </div>
        {subMenuVisible && (
          <ul
            className="border-green-2 absolute left-full top-0 border bg-black shadow-lg"
            style={{ width: "150px" }}
          >
            {themes.map((theme, index) => (
              <li
                key={theme.name}
                onClick={() => onThemeSelect(index)}
                className="cursor-pointer p-4 text-green-200 hover:bg-gray-500"
              >
                {theme.name}
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default ContextMenu;

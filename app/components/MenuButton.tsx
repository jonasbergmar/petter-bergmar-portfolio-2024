import React from "react";

type MenuButtonProps = {
  icon: string;
  onClick?: () => void; // Ensure onClick is optional
};

const MenuButton = ({ icon, onClick }: MenuButtonProps) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center"
      onClick={onClick} // Attach the onClick handler here
      aria-label={`${icon} button`} // Accessibility improvement
    >
      <span className="material-symbols-outlined text-green-200">{icon}</span>
    </button>
  );
};

export default MenuButton;

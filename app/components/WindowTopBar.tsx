import React from "react";
import MenuButton from "./MenuButton";

type WindowTopBarProps = {
  title: string;
  onClose: () => void; // New prop for the close function
};

const WindowTopBar = ({ title, onClose }: WindowTopBarProps) => {
  return (
    <div className="flex h-11 w-full items-center justify-between border-b border-green-200 bg-black">
      <p className="w-auto text-nowrap p-2 text-sm font-medium text-green-200">
        {title}
      </p>
      <div className="flex h-full w-full flex-col items-center justify-center gap-1">
        <div className="h-[2px] w-full bg-green-200"></div>
        <div className="h-[2px] w-full bg-green-200"></div>
        <div className="h-[2px] w-full bg-green-200"></div>
      </div>
      <MenuButton icon="close" onClick={onClose} />{" "}
      {/* Pass the close function here */}
    </div>
  );
};

export default WindowTopBar;

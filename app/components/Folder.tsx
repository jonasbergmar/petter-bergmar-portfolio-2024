import React from "react";
import Window from "./Window"; // Import the new Window component
import File from "./File"; // Import the new File component

type FolderProps = {
  onClose: () => void; // Add onClose prop
};

const Folder = ({ onClose }: FolderProps) => {
  return (
    <Window title="My folder" onClose={onClose}>
      <div className="flex w-full resize flex-wrap gap-4 p-4">
        <File name="file1.txt" logo={"/Textlogo.png"} />
        <File name="kiss.png" logo={"/imagefile.png"} />
        <File name="bajs.img" logo={"/imagefile.png"} />
        <File name="file2.txt" logo={"/Textlogo.png"} />
        <File name="file1.txt" logo={"/Textlogo.png"} />
        <File name="kiss.png" logo={"/imagefile.png"} />
        <File name="bajs.img" logo={"/imagefile.png"} />
        <File name="file2.txt" logo={"/Textlogo.png"} />
      </div>
    </Window>
  );
};

export default Folder;

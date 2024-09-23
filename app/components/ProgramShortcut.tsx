import React from "react";
import Image from "next/image";

type ProgramShortcutProps = {
  logo: string;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProgramShortcut = ({ logo, name, onClick }: ProgramShortcutProps) => {
  return (
    <button
      aria-label={name}
      className="flex flex-col items-center justify-center gap-2 rounded p-4 md:hover:bg-black/30"
      onClick={onClick}
    >
      <Image src={logo} alt={`${name} logo`} width={64} height={64} />
      <p className="text-sm font-medium text-gray-950">{name}</p>
    </button>
  );
};

export default ProgramShortcut;

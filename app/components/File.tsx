import React from "react";
import Image from "next/image";

type FileProps = {
  name: string;
  logo: string;
  onClick?: () => void;
};

const File = ({ name, logo, onClick }: FileProps) => {
  return (
    <button
      aria-label={name}
      className="flex flex-col items-center justify-center gap-2 rounded p-4 md:hover:bg-black/30"
      onClick={onClick}
    >
      <Image src={logo} alt={`${name} logo`} width={64} height={64} />
      <p className="text-sm font-medium text-gray-50">{name}</p>
    </button>
  );
};

export default File;

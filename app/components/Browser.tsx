import React from "react";
import Window from "./Window"; // Import the new Window component
import Image from "next/image";

type BrowserProps = {
  onClose: () => void; // Add onClose prop
};

const Browser = ({ onClose }: BrowserProps) => {
  return (
    <Window title="Safari" onClose={onClose}>
      <div className="content w-full">
        <Image
          src="/ProBee.png"
          alt="Safari browser"
          width={1024}
          height={768}
          className="w-full object-fill"
        />
        <div className="flex w-full flex-col gap-1 p-4">
          <h1 className="text-4xl font-semibold text-green-50">
            Pro Bee Sn™401
          </h1>
          <p className="max-w-[700px] text-green-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            harum ea excepturi quia enim sit rem nesciunt quas eos vel
            voluptatum, incidunt facilis. Quibusdam a, culpa quis repellat
            eligendi iusto? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Nulla harum ea excepturi quia enim sit rem nesciunt quas eos
            vel voluptatum, incidunt facilis. Quibusdam a, culpa quis repellat
            eligendi iusto? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Nulla harum ea excepturi quia enim sit rem nesciunt quas eos
            vel voluptatum, incidunt facilis. Quibusdam a, culpa quis repellat
            eligendi iusto?
          </p>
        </div>
      </div>
    </Window>
  );
};

export default Browser;

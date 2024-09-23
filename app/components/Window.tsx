import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import WindowTopBar from "./WindowTopBar"; // Make sure to import this

type WindowProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Window: React.FC<WindowProps> = ({ title, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showTopBar, setShowTopBar] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent"); // Initialize as transparent

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            setIsVisible(true);
            setShowTopBar(true);
            setBackgroundColor("bg-black"); // Change background color after scaling
          },
        },
      );

      return () => {
        gsap.to(containerRef.current, {
          scale: 0.1,
          opacity: 0,
          duration: 0.5,
        });
      };
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className={`flex h-full w-full flex-col overflow-hidden rounded border-2 border-black ${backgroundColor} shadow-sm`} // Use the dynamic background color
    >
      {showTopBar && <WindowTopBar title={title} onClose={onClose} />}{" "}
      {/* Render top bar */}
      <div className="h-full w-full overflow-auto">{isVisible && children}</div>
    </section>
  );
};

export default Window;

import { useState, useEffect, useRef } from "react";

import customers from "../jsons/Customers.json"


export default function Customers() {
  
  const icons = customers.icons;

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconWidth = 202;

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();

    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const iconsNeeded = Math.ceil(containerWidth / iconWidth) + 1;
  const repeatedIcons = Array(iconsNeeded).fill(icons).flat();

  return (
    <div className="w-full h-[300px] bg-light-grey mt-[147px] overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-4xl font-bold text-text-black font-title tracking-negative-1.1 text-center">
          {customers.title}
        </p>

        <div
          className="relative w-[1234px] overflow-hidden mt-[50px] h-fit fade-edges"
          ref={containerRef}
        >
          <div className="flex animate-scroll w-fit">
            {repeatedIcons.map((icon, index) => {
              const resolvedPath = new URL(`../${icon}`, import.meta.url).href;
              return (
                <img
                  src={resolvedPath}
                  key={index}
                  alt={`Customer Icon ${index + 1}`}
                  className="w-[178px] mr-6 ml-6"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

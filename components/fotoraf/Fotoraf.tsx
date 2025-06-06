import Image from "next/image";
import React, { useState } from "react";

const Fotoraf = ({ image }: any) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      key={image}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full select-none"
    >
      <Image
        src={image.url}
        alt={`Image from ${image.date}`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image is cropped to fit
          objectPosition: "center", // Centers the cropped part
        }}
        width={500}
        height={300}
        loading="lazy"
        className=" border border-secondary select-none pointer-events-none rounded-md"
      />
      {hover && (
        <div className="absolute inset-0 bg-secondary opacity-90 flex flex-col items-center justify-center rounded-md font-bold">
          <p className="text-primary text-lg">{image.date}</p>
          {image.desc && <p className="text-xs text-primary">{image.desc}</p>}
          {image.place && <p className="text-xs text-primary">{image.place}</p>}
        </div>
      )}
    </div>
  );
};

export default Fotoraf;

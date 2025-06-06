"use client";
import { ImageData } from "@/util/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FotorafShowcase = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const limit = 7; // Number of images per page

  useEffect(() => {
    const fetchImages = async (page: number) => {
      const res = await fetch(`/api/images`);
      if (res.ok) {
        const data: ImageData[] = await res.json();
        const sortedData = data.sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split("/").map(Number);
          const [dayB, monthB, yearB] = b.date.split("/").map(Number);
  
          const dateA = new Date(yearA, monthA - 1, dayA).getTime();
          const dateB = new Date(yearB, monthB - 1, dayB).getTime();
  
          return dateB - dateA;
        });
        setImages(sortedData.slice((page - 1) * limit, page * limit));
      } else {
        console.error("Failed to fetch images");
      }
    };

    fetchImages(1);
  }, []);

  return (
    <div className="flex overflow-x-scroll whitespace-nowrap custom-mr py-2 bg-primary my-2">
      {images.map((image) => (
        <div
          key={image.url}
          className="flex-none w-72 h-96 relative select-none pointer-events-none"
        >
          <Image
            src={image.url}
            alt={`Image from ${image.date}`}
            width={300}
            height={500}
            loading="lazy"
            className="w-full h-full object-cover  border border-secondary select-none pointer-events-none rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default FotorafShowcase;

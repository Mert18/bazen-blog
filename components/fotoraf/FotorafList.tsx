"use client";
import React, { useEffect, useState } from "react";
import Fotoraf from "./Fotoraf";
import { ImageData } from "@/util/types";

const FotorafList = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8; // Number of images per page

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
        setTotalPages(Math.ceil(data.length / limit));
      } else {
        console.error("Failed to fetch images");
      }
    };

    fetchImages(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-center items-center text-text p-4">FOTORAF</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-1">
        {images.map((image: any) => (
          <Fotoraf key={image.url} image={image} />
        ))}
      </div>

      <div className="flex justify-center">
        {totalPages > 1 && (
          <ul className="flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  disabled={page === currentPage}
                  className={`${
                    page === currentPage
                      ? "bg-secondary text-background"
                      : "bg-primary"
                  } px-3 py-1 m-1 w-9 h-9  border border-secondary hover:bg-secondary hover:text-primary rounded-md`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FotorafList;

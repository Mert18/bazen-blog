"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";

interface IPostCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
  image: string | null;
  slug: string;
}

const PostCard = ({
  title,
  description,
  date,
  link,
  category,
  image,
  slug
}: IPostCard) => {
  const language = useLanguage();
  const [categories, setCategories] = React.useState<string[]>([]);

  useEffect(() => {
    setCategories([]);
    category.split(",").map((cat) => {
      setCategories((prev) => [...prev, cat]);
    });
  }, [category]);

  return (
    <div className="my-2">
      <Link
        className="hover:underline hover:bg-primarylighter transition-all w-full h-full flex justify-start items-center text-text"
        href={`/${language}/blog${slug}`}
      >
          <div className="flex w-full md:flex-row flex-col md:items-center items-center">
            {image && (
              <Image
                src={image}
                alt="Lycians pixel art"
                width={150}
                height={150}
                className="mr-4 md:mb-0 mb-4"
              />
            )}
            <div className="flex flex-col justify-center md:items-start items-center w-full">
              <h1 className="font-bold mb-4">{title}</h1>
              <p className="text-2xs lg:text-sm my-2">{description}</p>
              <p className="text-2xs lg:text-sm my-2 text-accent">{date}</p>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default PostCard;

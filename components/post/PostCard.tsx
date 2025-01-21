"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
import { formatDistanceToNowStrict } from "date-fns";
import { getLanguageText } from "@/util/functions.";
import { IPostCard } from "@/util/types";

const PostCard = ({
  title,
  description,
  date,
  link,
  category,
  image,
  slug,
}: IPostCard) => {
  const language = useLanguage();
  const [categories, setCategories] = React.useState<string[]>([]);

  useEffect(() => {
    setCategories([]);
    category.split(",").map((cat) => {
      setCategories((prev) => [...prev, cat]);
    });
  }, [category]);

  const timeAgo = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number); // Extract day, month, year
    const date = new Date(year, month - 1, day); // Create a Date object

    if (language === "tr") {
      return formatDistanceToNowStrict(date, { addSuffix: true })
        .replace("years", "yıl")
        .replace("year", "yıl")
        .replace("months", "ay")
        .replace("month", "ay")
        .replace("weeks", "hafta")
        .replace("week", "hafta")
        .replace("days", "gün")
        .replace("day", "gün")
        .replace("hours", "saat")
        .replace("hour", "saat")
        .replace("ago", "önce");
    }
    return formatDistanceToNowStrict(date, { addSuffix: true });
  };

  const truncateText = (text: string, maxLength = 400) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="my-2 bg-primary">
      <Link
        className="hover:underline transition-all w-full h-full flex justify-start items-center text-text p-4"
        href={`/${language}/blog${slug}`}
      >
        <div className="flex w-full md:flex-row flex-col md:items-start items-center h-full">
          {image && (
            <Image
              src={image}
              alt="Lycians pixel art"
              width={300}
              height={300}
              className="mr-4 md:mb-0 mb-4 p-1 border border-secondary"
            />
          )}
          <div className="md:items-start items-center w-full h-full">
            <div className="mb-4">
              <h1 className="font-bold text-2xl">{title}</h1>
              <p className="text-xs lg:text-sm text-accent">{timeAgo(date)}</p>
            </div>
            <p className="text-sm">{truncateText(description)}</p>
            <div className="flex flex-row-reverse lg:text-sm">
              <p>{getLanguageText("Devamını okuyun", "Read More")}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;

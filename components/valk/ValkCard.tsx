"use client";
import useLanguage from "@/hooks/useLanguage";
import { getLanguageText } from "@/util/functions.";
import { IValkCard } from "@/util/types";
import { formatDistanceToNowStrict } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ValkCard = ({
  title,
  description,
  date,
  link,
  category,
  image,
  valk,
  steps,
  distance,
  duration,
}: IValkCard) => {
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
        href={`/${language}${valk}`}
      >
        <div>
          <div className="flex w-full md:flex-row flex-col md:items-start items-center">
            <div className="bg-white opacity-90 mr-4 md:mb-0 mb-4">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                  className="p-1 border border-secondary"
                />
              )}
            </div>
            <div className="flex flex-col justify-center md:items-start items-center w-full">
              <h1 className="font-bold text-base md:text-xl lg:text-2xl mb-4">
                {title}
                <p className="text-xs lg:text-sm text-accent">
                  {timeAgo(date)}
                </p>
              </h1>
              <p className="text-sm">{truncateText(description)}</p>
              <p className="text-xs lg:text-sm my-2">
                {steps} {getLanguageText("Adım", "Steps")}
              </p>
              <p className="text-xs lg:text-sm my-2">{distance}</p>
              <p className="text-xs lg:text-sm my-2">{duration}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ValkCard;

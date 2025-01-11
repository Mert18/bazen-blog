'use client'
import useLanguage from '@/hooks/useLanguage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

interface IValkCard {
    title: string;
    description: string;
    date: string;
    link: string;
    category: string;
    image: string | null;
    valk: string;
    steps: string;
    distance: string;
    duration: string;
  }
  
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
    duration
  }: IValkCard) => {
    const language = useLanguage();
    const [categories, setCategories] = React.useState<string[]>([]);
  
    useEffect(() => {
      setCategories([]);
      category.split(",").map((cat) => {
        setCategories((prev) => [...prev, cat]);
      });
    }, [category]);
  
    return (
      <div className="flex justify-center items-center my-2">
        <Link
          className="hover:underline hover:bg-primarylighter transition-all w-full h-full flex justify-start items-center text-text"
          href={`/${language}${valk}`}
        >
          <div>
            <div className="flex w-full md:flex-row flex-col md:items-start items-center">
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
                <h1 className="font-bold text-base md:text-xl lg:text-2xl mb-4">{title}</h1>
                <p className="text-2xs lg:text-sm my-2">{description}</p>
                <p className="text-2xs lg:text-sm my-2">{steps} {language === "en" ? "Steps" : "Adım"}</p>
                <p className="text-2xs lg:text-sm my-2">{distance}</p> 
                <p className="text-2xs lg:text-sm my-2">{duration}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  
  export default ValkCard;
  
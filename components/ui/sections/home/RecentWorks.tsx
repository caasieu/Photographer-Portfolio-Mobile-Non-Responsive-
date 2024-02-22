'use client'
import React from 'react';
//import { CarouselWorks } from "./CarouselWorks";


import Image from "next/image";

/*
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

*/

import Swiper from 'react-id-swiper';
import 'swiper/css';

export function RecentWorks() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const pictures = [
    "/mines/landscape-photography-blog-main-artisanhd.jpg",
    "/mines/2c1db1248b475e8ea7ff1bb534fa8884.jpg",
    "/mines/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.avif",
    "/fts/6.jpg",
    "/fts/5.jpg",
    "/fts/4.jpg",
    "/fts/3.jpeg",

  ];


  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    autoHeight: true,
    breakpoints: {
      340: {
        width: 340,
        slidesPerView: 1
      },
      768: {
        width: 768,
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <div className="flex flex-col py-4 w-full p-4 gap-10 sm:p-6 min-h-[350px] "
    // bg-gray-100 dark:bg-zinc-700
    >

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col">
          <span className="font-bold text-lg"> Meus Trabalhos Recentes </span>
          <span className="font-light text-xs"> Perfeitamente criadas por mim. </span>
        </div>

        <div className="flex flex-row gap-2 text-xs text-violet-500">
          Explore Mais
        </div>
      </div>



      <div className="w-full h-[360px] rounded-lg overflow-hidden">
        <Swiper
          {...params}>

          {
            pictures.map((pic: string, idx: number) => (
              <div key={idx} className='bg-gray-200 rounded-lg overflow-hidden dark:bg-zinc-800 p-1 max-h-[350px] min-h-[350px] sm:max-h-[300px] sm:min-h-[300px] '>
                <div className="duration-700 rounded-lg ease-in-out bg-blue-200 relative max-h-[260px] min-h-[260px] sm:max-h-[200px] sm:min-h-[200px] overflow-hidden">
                  <Image fill src={pic} className="no-repeat object-center object-cover sm:object-cover" alt="..." />
                </div>
              </div>
            ))
          }

        </Swiper>
      </div>
    </div>
  )
}
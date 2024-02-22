'use client'
import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


export function CarouselWorks() {

  const pictures = [
    "/mines/landscape-photography-blog-main-artisanhd.jpg",
    "/mines/2c1db1248b475e8ea7ff1bb534fa8884.jpg",
    "/mines/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.avif",
    "/fts/6.jpg",
    "/fts/5.jpg",
    "/fts/4.jpg",
    "/fts/3.jpeg",

  ];

  return (
    <div className="w-full h-[360px] rounded-lg overflow-hidden">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 340px
          340: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          /*768: {
            width: 768,
            slidesPerView: 3,
          },*/
        }}
        spaceBetween={20}
        onActiveIndexChange={(a) => console.log(a.activeIndex)}
        pagination={{
          clickable: false,
        }}
        //modules={[Pagination]}
        className="mySwiper"
      >

        {
          pictures.map((pic: string, idx: number) => (
            <SwiperSlide key={idx} className="">
              <div className="duration-700 ease-in-out rounded-lg bg-blue-200 relative h-[360px] overflow-hidden">
                <Image fill src={pic} className="no-repeat object-center object-cover sm:object-cover" alt="..." />
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>

  )
}
'use client'
import { gettingActiveBreakpoint } from "@/components/providers/gettingActiveBreakpoint"
import Image from "next/image"


export function MyWorks() {

  const pictures = [
    "/mines/2c1db1248b475e8ea7ff1bb534fa8884.jpg",
    "/mines/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.avif",
    "/fts/6.jpg",
    //"/mines/images.jpg",
    "/mines/landscape-photography-blog-main-artisanhd.jpg",
    
  ];

  return (
    <div className="flex flex-col items-center rounded-sm p-4 py-8 space-y-10 bg-transparent border-t border-gray-200 dark:border-gray-800 mt-10 min-h-[360px]">
      <div className="flex flex-col space-y-2 items-center">
        <h1 className="font-bold text-lg"> Meus Trabalhos </h1>
        <span className="font-light text-sm text-center"> Esses são alguns dos meus trabalhos, explore as minhas fotografias. </span>
      </div>

      <div className="columns-1 space-y-4 items-center justify-center sm:columns-3 gap-4 w-full">
        {
          pictures.map((image: string, idx: number) => (
            <div key={idx} className={`hover:scale-105 transition duration-200 cursor-pointer container rounded-xm relative overflow-hidden  aspect-square  bg-gray-300 ${idx+1 === pictures.length && 'sm:hidden'}`}>
              <Image
                src={image}
                alt='picture'
                fill
                className="object-cover"
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
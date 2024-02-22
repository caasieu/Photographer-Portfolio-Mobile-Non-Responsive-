'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

export function MyExperience() {


  return (
    <div className="flex flex-col py-4 w-full p-4 gap-10 sm:p-6 min-h-[350px] bg-gray-200 dark:bg-zinc-800"
    // bg-gray-100 dark:bg-zinc-700
    >
      <div className="w-full flex justify-center">
        <span className="font-bold text-lg "> Minha Experiência </span>
      </div>

      <div className="flex flex-col gap-4 sm:gap-0">

        <div className="flex flex-col gap-8 sm:gap-0 min-h-[90px] sm:flex-row sm:items-start sm:justify-between relative">
          <div className="flex flex-row-reverse sm:flex-row  items-start justify-between w-full sm:w-[50%]">
            <div className="flex items-center justify-center bg-gray-300 dark:bg-zinc-700 rounded-full w-[50px] h-[50px]">
              <Icon icon={'ph:user-circle-fill'} className="text-black dark:text-white text-2xl" />
            </div>


            <div className="flex flex-col sm:items-end sm:px-4  gap-1 ">
              <span className="font-bold text-black dark:text-white text-xs"> Auto Empregador, Luanda </span>
              <span className="font-light text-xs"> Jan 24-Ago 2014 </span>
            </div>
          </div>

          <div className="w-full sm:w-[50%] relative">

            <div className="
              flex flex-col border-l border-dashed border-zinc-400 min-h-[90px] px-4 w-full 
              before:absolute  before:content-[''] before:rounded-full before:w-5 before:h-5 before:bg-gray-200 dark:before:bg-zinc-800 before:-top-5 before:-left-[9px] 
              before:border before:border-zinc-400 before:border-dashed before:inset-4

              after:absolute  after:content-[''] after:rounded-full after:w-3 after:h-3 after:bg-orange-400 after:-top-4 after:-left-[5px] 
            ">
              <span className="font-bold text-black dark:text-white text-xs"> Designer Visual </span>
              <span className="font-light text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae magnam eum, Illum vero nulla, fugiat hic impedit sequi id numquam voluptas odit enim quod. </span>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-8 sm:gap-0 min-h-[90px] sm:flex-row sm:items-start sm:justify-between relative">
          
          <div className="flex flex-row-reverse sm:flex-row  items-start justify-between w-full sm:w-[50%]">
            <div className="flex items-center justify-center bg-gray-300 dark:bg-zinc-700 rounded-full w-[100px] h-[50px]">
              <Icon icon={'ph:webcam-fill'} className="text-black dark:text-white text-2xl" />
            </div>


            <div className="flex flex-col sm:items-end sm:px-4  gap-1 ">
              <span className="font-bold text-black dark:text-white text-xs"> Fotográfo Mundial </span>
              <span className="font-light text-xs"> Fev 14-Mar 2020 </span>
            </div>
          </div>

          <div className="w-full sm:w-[50%] relative">

            <div className="
              flex flex-col border-l border-dashed border-zinc-400 min-h-[90px] px-4 w-full 
              before:absolute  before:content-[''] before:rounded-full before:w-5 before:h-5 before:bg-gray-200 dark:before:bg-zinc-800 before:-top-5 before:-left-[9px] 
              before:border before:border-zinc-400 before:border-dashed before:inset-4

              after:absolute  after:content-[''] after:rounded-full after:w-3 after:h-3 after:bg-red-400 after:-top-4 after:-left-[5px] 
              ">
              <span className="font-bold text-black dark:text-white text-xs"> Designer Visual </span>
              <span className="font-light text-xs"> Nulla recusandae magnam eum, sit cumque culpa omnis. Illum ipsum, vero nulla, fugiat hic impedit sequi id numquam voluptas odit enim quod. </span>
            </div>
          </div>
        </div>




        <div className="flex flex-col gap-8 sm:gap-0 min-h-[90px] sm:flex-row sm:items-start sm:justify-between relative">
         
          <div className="flex flex-row-reverse sm:flex-row  items-start justify-between w-full sm:w-[50%]">
            <div className="flex items-center justify-center bg-gray-300 dark:bg-zinc-700 rounded-full w-[150px] h-[50px]">
              <Icon icon={'ph:star-and-crescent-fill'} className="text-black dark:text-white text-2xl" />
            </div>


            <div className="flex flex-col sm:items-end sm:px-4  gap-1 ">
              <span className="font-bold text-black dark:text-white text-xs"> Director Criativo </span>
              <span className="font-light text-xs"> Fev 14-Mar 2020 </span>
            </div>
          </div>

          <div className="w-full sm:w-[50%] relative">

            <div className="
              flex flex-col border-l border-dashed border-zinc-400 min-h-[90px] px-4 w-full 
              before:absolute  before:content-[''] before:rounded-full before:w-5 before:h-5 before:bg-gray-200 dark:before:bg-zinc-800 before:-top-5 before:-left-[9px] 
              before:border before:border-zinc-400 before:border-dashed before:inset-4


              after:absolute  after:content-[''] after:rounded-full after:w-3 after:h-3 after:bg-cyan-400 after:-top-4 after:-left-[5px] 
            ">
              <span className="font-bold text-black dark:text-white text-xs"> Designer Visual </span>
              <span className="font-light text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae magnam eum, sit cumque culpa omnis. Illum ipsum, vero nulla, fugiat hic impedit sequi id numquam voluptas odit enim quod. </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
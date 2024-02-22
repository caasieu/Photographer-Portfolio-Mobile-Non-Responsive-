'use client'
import { Icon } from "@iconify/react/dist/iconify.js";


export function Help() {

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center py-4 w-full p-4 gap-10 sm:p-6 min-h-[350px] pb-20"
    // bg-gray-100 dark:bg-zinc-700
    >
      <div className="flex flex-col gap-2 sm:max-w-[40%]">

        <div className="flex flex-row items-center p-2 px-4 gap-3 h-[75px] rounded-lg border border-gray-200 dark:border-zinc-800">
          <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-orange-400">
            <Icon icon={'ph:airplay'} className="text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs"> Design de Websites </span>
            <span className="text-[9px]"> 76 Projectos </span>
          </div>
        </div>


        <div className="flex flex-row items-center p-2 px-4 gap-3 h-[75px] rounded-lg border border-gray-200 dark:border-zinc-800">
          <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-red-400">
            <Icon icon={'ph:device-mobile-speaker'} className="text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs"> Desenvolvimento de Apps </span>
            <span className="text-[9px]"> 3 Projectos </span>
          </div>
        </div>


        <div className="flex flex-row items-center p-2 px-4 gap-3 h-[75px] rounded-lg border border-gray-200 dark:border-zinc-800">
          <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-cyan-400">
            <Icon icon={'ph:user-focus'} className="text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs"> Foco no Cliente </span>
            <span className="text-[9px]"> 16 Projectos </span>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-3 sm:max-w-[40%]">
        <span className="font-regular text-3xl"> O que precisa que eu faça? </span>{/**/}
        <span className="font-light text-sm ">
          Well, let me tell you something, funny boy. Y{"\'"}know that little stamp, the one
          that says {"\""}New York Public Library{"\""}? Well that may not mean anything to you,
          but that means a lot to me. One whole hell of a lot.
        </span>

        <span className="font-light text-sm ">
          Well that may not mean anything to you,
          but that means a lot to me. One whole hell of a lot.
        </span>




        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="font-regular text-3xl"> 285+ </span>
            <span className="font-light text-sm ">
              Projectos Finalizados
            </span>
          </div>

          <div className="flex flex-col">
          <span className="font-regular text-3xl"> 125+ </span>
            <span className="font-light text-sm ">
              Projectos Finalizados
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
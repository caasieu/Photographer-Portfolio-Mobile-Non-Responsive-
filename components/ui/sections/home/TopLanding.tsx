'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Socials } from "../../shared/minimal/Socials";

export function TopLanding() {

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-left p-4">
      <div className='flex flex-col items-center justify-center space-y-6 min-h-[560px] sm:w-[50%] radial-blue'>
        <div className=" min-w-[300px]">

          <div className="flex flex-col items-center space-y-5">
            <h1 className='font-bold text-4xl lg:text-8xl text-balance align-justify'>
              EU.
              <span className='text-2xl lg:text-4xl'>
                Sou Júlio Motas!
              </span>
            </h1>


            <div className="flex flex-col items-center font-regular text-lg">
              <span className='text-balance'>
                A sua satisfação é a minha
              </span>

              <div className="flex items-center space-x-2">
                <div className="h-[2px] w-[45px] bg-gray-800 dark:bg-gray-100" />

                <span>
                  dedicação
                </span>

                <div className="h-[2px] w-[45px] bg-gray-800 dark:bg-gray-100" />
              </div>
            </div>


            <span className='font-light text-md text-center lg:max-w-[520px] text-balance p-4'>
              Sou um fotográfo dedicado a isso, podes contratar-me e usufruir dos
              meus serviços garanto que não se vai arrepender de o fazer.
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {

            }}
            className="bg-violet-500 text-sm p-2 px-4 rounded-full text-[#f5f5f5]"
          >
            Quero Contratar
          </button>


          <button
            onClick={() => {

            }}
            className="bg-black dark:bg-zinc-800 text-sm font-light p-2 px-4 rounded-full text-white"
          >
            Ler Mais
          </button>
        </div>
      </div>



      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 sm:h-[500px] sm:w-[50%]">

        <div className='flex flex-col aspect-square bg-transparent rounded-full 2xl:rounded-lg w-full lg:w-2/2 min-h-[460px] sm:min-h-[560px] overflow-hidden relative'>
          <Image
            src={'/fts/1.jpeg'}
            fill={true}
            alt={'pict'}
            className='hover:scale-105 transition duration-200 cursor-pointer object-cover'
          />
        </div>
        
        <Socials />
      </div>
    </div>

  )
}
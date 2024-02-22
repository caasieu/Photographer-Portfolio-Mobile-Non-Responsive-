'use client'
import Image from "next/image";


export function AboutMe() {

  return (
    <div className="flex justify-center w-full mt-14">
      <div className="flex flex-col items-center w-full sm:max-w-[900px] mt-10 min-h-[360px] gap-10">
        <div className="flex flex-col items-center w-full gap-6 sm:flex-row sm:justify-start">
          {/*<div className="bg-blue-300 w-full sm:w-[50%]">


          </div>*/}

          <div className="bg-gray-200 overflow-hidden rounded-sm w-full h-[460px] sm:h-[400px] sm:w-[360px] shadow-lg relative">
            <Image
              src={"/fts/4.jpg"}
              alt='picture'
              fill
              className="object-cover"
            />
          </div>



          <div className="flex flex-col justify-end w-full sm:w-[400px] h-[360px] sm:h-[400px] gap-4">
            <h1 className="font-bold text-lg"> Sobre Mim </h1>

            {/*<span className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, alias doloribus. Odit vero sequi ab nesciunt culpa sit quas! Corrupti provident libero natus sapiente dolorem placeat perferendis fugiat illum perspiciatis?
            
            
        </span>*/}

            <p className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
">
              Well, let me tell you something, funny boy. Y{"\'"}know that little stamp, the one
              that says {"\""}New York Public Library{"\""}? Well that may not mean anything to you,
              but that means a lot to me. One whole hell of a lot.
            </p>


            <div className="grid grid-cols-2 gap-2">

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Nascimento </span>

                <span className="font-light text-sm">: 24.12.1996 </span>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Idade </span>

                <span className="font-light text-sm">: 27 </span>
              </div>


              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Cidade </span>

                <span className="font-light text-sm">: Luanda </span>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Hobby </span>

                <span className="font-light text-sm">: Designer </span>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Faculdade </span>

                <span className="font-light text-sm">: ISPTEC </span>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Curso </span>

                <span className="font-light text-sm">: Design </span>
              </div>


              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Email </span>

                <span className="font-light text-sm">:juliomts@sootas.com </span>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-bold text-sm"> Telemóvel </span>

                <span className="font-light text-sm">: 945345123 </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 ">
              <button
                className="bg-violet-500  py-1 text-xs rounded-full px-4 h-[30px] text-[#f5f5f5] "
              >
                Contrate-me
              </button>

              <button
                className="bg-transparent border border-violet-500 py-1 text-xs rounded-full px-4 h-[30px] text-[#121212]  dark:text-gray-100"
              >
                Baixar CV
              </button>
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-6 py-3 sm:flex-row w-full border-t-0 border-gray-200 dark:border-gray-700">

          <div className="flex flex-row items-start w-full sm:w-[360px] gap-6 justify-between">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-md text-dark dark:text-white"> Educação </h1>

              <div className="flex flex-col gap-4">

                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Universidade de Design </span>

                  <span className="font-light text-xs"> Licenciatura </span>
                </div>


                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Universidade de Design </span>

                  <span className="font-light text-xs"> Licenciatura </span>
                </div>


                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Universidade de Design </span>

                  <span className="font-light text-xs"> Licenciatura </span>
                </div>
              </div>
            </div>



            <div className="flex flex-col items-end gap-6">
              <h1 className="font-bold text-md text-dark dark:text-white"> Experiência </h1>

              <div className="flex flex-col items-end  gap-4">

                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Amazon </span>

                  <span className="font-light text-xs"> Designer </span>
                </div>


                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Facebook Marketing </span>

                  <span className="font-light text-xs"> Director Criatve </span>
                </div>


                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs"> Um Outro </span>

                  <span className="font-light text-xs"> bla bla </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start w-full sm:w-[400px] min-h-[260px] sm:min-h-[200px] gap-6">
            <h1 className="font-bold text-md text-dark dark:text-white"> Minhas Habilidades </h1>

            <div className="flex flex-col items-end w-full gap-4">

              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-violet-500 dark:text-white">Web Design</span>
                  <span className="text-xs font-medium text-violet-500 dark:text-white">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-violet-600 h-2 rounded-full w-[45%]"></div>
                </div>
              </div>



              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-violet-500 dark:text-white">Fotos Landscape</span>
                  <span className="text-xs font-medium text-violet-500 dark:text-white">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-violet-600 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>


              <div className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-violet-500 dark:text-white">Edição Photoshop</span>
                  <span className="text-xs font-medium text-violet-500 dark:text-white">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-violet-600 h-2 rounded-full w-[55%]"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
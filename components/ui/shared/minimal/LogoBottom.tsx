

export function LogoBottom() {

  return (

    <div className="flex items-center justify-between space-x-1 w-full">

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <div className="w-[30px] h-[30px] rounded-full bg-violet-500 dark:bg-violet-400" />
          <span className="font-bold text-violet-500 dark:text-violet-400"> Logo </span>

        </div>

        <div className="border-l border-dashed border-zinc-400 pl-4 h-[100%]">
          <span className="font-light text-xs">
            Espero que tenha gostado!
          </span>
        </div>
      </div>



      <div className="flex flex-row items-end text-end h-[100%]">
          <span className="font-light text-xs">
            Trabalhando <div className="text-violet-500">Em Volta do Mundo!</div>
          </span>
        </div>
    </div>

  )
}
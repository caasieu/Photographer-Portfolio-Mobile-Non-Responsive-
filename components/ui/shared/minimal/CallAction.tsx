'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

export function CallAction() {

  return (
    <div className="sm:flex sm:items-center space-x-2 ">
      <span className="font-light text-xs text-violet-400 hidden sm:block">
        +244-945123555
      </span>

      <button className="flex items-center justify-center shadow-lg bg-white py-1 text-xs rounded-full  h-[30px] w-[30px] text-[#121212] dark:bg-zinc-800 ">
        <Icon icon={"ph:phone-call-fill"} className="text-lg text-violet-500 " />
      </button>
    </div>
  )
}
'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";


export function Socials(){

  return (
    <div className="flex flex-row items-center justify-center sm:flex-col gap-3 p-2 w-full height-[45px] rounded-lg sm:w-[45px]">
      <Link href={'#'} className="bg-black dark:bg-zinc-800 p-2 rounded-full">
        <Icon icon={"ph:whatsapp-logo-fill"} className="text-lg text-white " />
      </Link>

      <Link href={'#'} className="bg-black dark:bg-zinc-800 p-2 rounded-full">
        <Icon icon={"ph:youtube-logo-fill"} className="text-lg text-white " />
      </Link>

      <Link href={'#'} className="bg-black dark:bg-zinc-800 p-2 rounded-full">
        <Icon icon={"ph:instagram-logo-fill"} className="text-lg text-white" />
      </Link>
    </div>
  )
}
'use client'

import { Icon } from "@iconify/react/dist/iconify.js"


export function NavButton(props: any) {


  return (
    <button
      {...props}
      className="bg-transparent w-30 h-30"
    >
      <Icon icon={'ph:list-thin'} className="" />
    </button>
  )
}
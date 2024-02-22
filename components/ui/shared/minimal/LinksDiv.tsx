'use client'

import { ThemeSwitcher } from "@/components/buttons/ThemeSwitcher"
import Link from "next/link"
import { usePathname } from 'next/navigation'



export function LinksDiv() {

  const pathname = usePathname();

  return (
    <div className="sm:flex sm:items-center space-x-6 hidden text-sm ">
      <Link href={'/'} className={pathname === "/" ? "opacity-100" : "opacity-80"}>
        Home
      </Link>

      <Link href={'/'} className={pathname === "/trabalhos" ? "opacity-100" : "opacity-80"}>
        Meus Trabalhos
      </Link>

      <Link href={'/sobre'} className={pathname === "/sobre" ? "opacity-100" : "opacity-80"}>
        Sobre Mim
      </Link>


      <Link href={'/'} className={pathname === "/contactos" ? "opacity-100" : "opacity-80"}>
        Contactos
      </Link>


      {<ThemeSwitcher />}
    </div>
  )
}
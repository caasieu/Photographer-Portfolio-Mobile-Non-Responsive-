'use client'
import { CallAction } from "./CallAction";
import { NavButton } from "./NavButton";


export function MobileNavigation() {

  return (
    <div className="flex flex-row items-center gap-3 sm:hidden">
      <CallAction />
      <NavButton />
    </div>
  )
}
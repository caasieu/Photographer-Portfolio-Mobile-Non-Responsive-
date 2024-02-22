
import { Logo } from "./minimal/Logo";
import { LinksDiv } from './minimal/LinksDiv';
import { MobileNavigation } from "./minimal/MobileNavigation";
import { CallAction } from "./minimal/CallAction";


export function Header() {

  return (
    <header className="flex items-center justify-between px-4 sm:p-4 h-[60px] text-black dark:text-white sticky top-0 z-10 backdrop-blur mix-blend-cover">
      <Logo />

      <LinksDiv />

      <div className="hidden sm:block">
        <CallAction />
      </div>

      <MobileNavigation />
    </header>
  )
}
import Link from "next/link";
import { LogoBottom } from "./minimal/LogoBottom";


export function Footer() {

	return (
		<footer className="flex flex-col justify-between pt-4 w-full px-4 gap-10 sm:pt-6 min-h-[220px] ">
			<div className="flex flex-col justify-start gap-4 sm:gap-6 sm:flex-row sm:items-start h-[80%]">

				<div className="flex flex-col justify-between gap-10 sm:w-[70%] h-[100%]">
					<div>
						<span className="font-regular text-xl">Nós iremos definitivamente fazer <br /> algo fantástico juntos.</span>
					</div>

					<div>
						<span className="font-regular text-xl">
							Comece dizendo <Link href={'/'} className="text-violet-500 underline">Olá!</Link>
						</span>
					</div>
				</div>


				<div className="flex flex-col gap-6 sm:w-[30%]">
					<div className="flex flex-col gap-1">
						<span className="font-bold text-sm">Informação</span>
						<span className="font-light text-xs"> 154, Luanda, AO, 293 </span>
					</div>

					<div className="flex flex-col gap-2
					border-l border-dashed border-zinc-400 min-h-[90px] px-4 w-full 
					before:absolute  before:content-[''] before:rounded-full before:w-5 before:h-5 before:bg-gray-200 dark:before:bg-zinc-800 before:-top-5 before:-left-[9px] 
					before:border before:border-zinc-400 before:border-dashed before:inset-4

					after:absolute  after:content-[''] after:rounded-full after:w-3 after:h-3 after:bg-orange-400 after:-top-4 after:-left-[5px] 
					">

						<div className="w-[140px] cursor-pointer">
							<span className="text-xs">Ligue Para Mim</span>
						</div>

						<div className="w-[140px] cursor-pointer">
							<span className="text-xs">Mandar Email</span>
						</div>

						<div className="w-[140px] cursor-pointer">
							<span className="text-xs">Prefere o Whatsapp?</span>
						</div>
					</div>
				</div>
			</div>



			<div className="flex flex-row items-center border-t border-dashed border-zinc-400 min-h-[50px] h-[20%] py-2">
				<LogoBottom />
			</div>
		</footer>
	)
}
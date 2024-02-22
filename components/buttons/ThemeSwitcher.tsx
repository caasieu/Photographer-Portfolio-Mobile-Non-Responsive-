"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  /*

    <button
      className={`w-fit p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon icon={theme === "light" ? "solar:sun-2-outline" : "solar:moon-stars-bold" } />
    </button>
  */

  return (
    <label className="relative inline-flex items-center cursor-pointer outline-none">
      <input type="checkbox" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} value="" className="sr-only peer outline-none" />
      <div className="
      flex items-center justify-between 
      w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-violet-500 dark:peer-focus:ring-violet-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-500">
        <div className="flex items-center justify-between w-full p-1">
          <div>
            <Icon icon={"solar:moon-stars-bold"} className="text-white" />
          </div>


          <div>
            <Icon icon={"solar:sun-2-outline"} />
          </div>
        </div>
      </div>
      {/*<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>*/}
    </label>

  );
};
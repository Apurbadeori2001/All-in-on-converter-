"use client";

import { Search, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="h-16 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-8 z-50 shrink-0 sticky top-0 w-full">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
          C
        </div>
        <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 hidden sm:inline-block">
          ConvertX
        </span>
      </div>

      <div className="flex-1 max-w-md px-4 sm:px-12 flex justify-end lg:justify-center">
        <div className="relative group w-full max-w-xs sm:max-w-full">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-zinc-500" />
          </div>
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600 focus:bg-zinc-900"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 pl-2">
        <div className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-zinc-800/50 transition-colors">
          <span className="text-sm font-medium text-zinc-400 hidden sm:inline-block">
            Alex Rivera
          </span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 p-[1px]">
            <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-[10px] font-bold text-white">
              AR
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

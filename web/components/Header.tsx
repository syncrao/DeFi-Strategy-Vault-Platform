"use client";

import { Bell, Menu, Search, Wallet } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <div className="bg-white/10 px-6 py-3 border-b border-white/20 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setSidebarOpen(true)} 
            className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-2 w-96 group hover:bg-white/20 transition-all duration-300">
            <Search className="h-5 w-5 text-white/50 mr-3 group-hover:text-white/70 transition-all" />
            <input
              type="text"
              placeholder="Search anything with AI..."
              className="bg-transparent text-white placeholder-white/50 focus:outline-none flex-1"
            />
          </div>

          <div className="flex items-center space-x-2">
            
            <button className="relative p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-5 w-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>

            <button className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-right">
                <p className="text-white font-semibold">Connect</p>
                <p className="text-white/60 text-xs">Wallet</p>
              </div>

              <div>
                <Wallet className="text-white w-8 h-8" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import commonData from "@/data/common.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#00FF41]/20 bg-black/90 backdrop-blur-md z-50 px-2 md:px-10 border-b border-[#00FF41]/30">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center gap-2"
        >
          <Terminal className="text-[#00FF41]" />
          <span className="font-bold ml-[5px] text-[#00FF41] font-mono tracking-wider text-sm md:text-base">
            {commonData.brand}
          </span>
        </Link>

        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#00FF41]/30 bg-[#003B00]/20 mr-[15px] px-[20px] py-[10px] rounded-sm text-[#00FF41]">
            <Link href="/about" className="cursor-pointer hover:text-white hover:bg-[#00FF41]/20 px-3 py-1 transition-all duration-300 font-mono">
              /about
            </Link>
            <Link href="/skills" className="cursor-pointer hover:text-white hover:bg-[#00FF41]/20 px-3 py-1 transition-all duration-300 font-mono">
              /skills
            </Link>
            <Link href="/projects" className="cursor-pointer hover:text-white hover:bg-[#00FF41]/20 px-3 py-1 transition-all duration-300 font-mono">
              /projects
            </Link>
            <Link href="/contact" className="cursor-pointer hover:text-white hover:bg-[#00FF41]/20 px-3 py-1 transition-all duration-300 font-mono">
              /contact
            </Link>
          </div>
        </div>

        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-[#00FF41] hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full h-screen bg-black/95 backdrop-blur-md border-b border-[#00FF41] p-10 md:hidden flex flex-col items-center gap-8 text-[#00FF41] z-40 font-mono text-xl">
            <Link href="/about" onClick={toggleMenu} className="cursor-pointer hover:text-white transition-colors tracking-widest">
              /about
            </Link>
            <Link href="/skills" onClick={toggleMenu} className="cursor-pointer hover:text-white transition-colors tracking-widest">
              /skills
            </Link>
            <Link href="/projects" onClick={toggleMenu} className="cursor-pointer hover:text-white transition-colors tracking-widest">
              /projects
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="cursor-pointer hover:text-white transition-colors tracking-widest">
              /contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

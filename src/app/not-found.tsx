"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center font-mono text-[#00FF41] relative z-50">
      <h1 className="text-[100px] md:text-[150px] font-bold leading-none opacity-80 glitch-text">
        404
      </h1>
      <div className="text-xl md:text-2xl mb-8 tracking-widest text-center px-5">
        SYSTEM_FAILURE: PAGE_NOT_FOUND
      </div>
      <p className="text-[#00FF41]/70 mb-10 text-center max-w-md px-5">
        The requested data sector could not be located in the Matrix. 
        It may have been deleted or never existed.
      </p>
      
      <Link 
        href="/"
        className="px-8 py-3 border border-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all duration-300 font-bold tracking-wider"
      >
        RETURN_TO_SOURCE
      </Link>

      <style jsx>{`
        .glitch-text {
          text-shadow: 2px 2px 0px #003B00, -2px -2px 0px #003B00;
          animation: glitch 1s infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>
    </div>
  );
}

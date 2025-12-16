"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Welcome to the Matrix... I mean, my Portfolio.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-black overflow-hidden relative pt-[65px]">
      
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 h-full z-10 relative px-5 md:px-10">
        <div className="border border-[#00FF41] bg-black/80 p-6 md:p-10 max-w-3xl w-full shadow-[0_0_50px_rgba(0,255,65,0.2)]">
          <p className="text-[#00FF41] font-mono text-lg md:text-3xl mb-5 min-h-[60px]">
            {">"} {text}
            <span className="animate-pulse">_</span>
          </p>
          
          <div className="flex flex-col gap-4">
            <p className="text-[#00FF41]/80 font-mono text-xs md:text-base leading-relaxed">
              System Status: ONLINE
              <br />
              Location: UNKNOWN
              <br />
              Objective: BUILD_AWESOME_WEB_APPS
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row gap-5">
              <Link 
                href="/projects"
                className="px-6 py-3 bg-[#00FF41] text-black font-bold font-mono hover:bg-[#003B00] hover:text-[#00FF41] border border-[#00FF41] transition-all duration-300 text-center"
              >
                VIEW_PROJECTS
              </Link>
              <Link 
                href="/contact"
                className="px-6 py-3 bg-transparent text-[#00FF41] font-bold font-mono border border-[#00FF41] hover:bg-[#00FF41]/20 transition-all duration-300 text-center"
              >
                INITIATE_CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

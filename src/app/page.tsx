"use client";
// Force rebuild

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ArrowRight, Terminal, Cpu, Globe, Activity, Shield, Wifi } from "lucide-react";

import homeData from "@/data/home.json";
import commonData from "@/data/common.json";

/**
 * Home Page Component
 * 
 * Displays the main landing page of the portfolio.
 * Uses `homeData` for page-specific content and `commonData` for shared personal details.
 * Features a system monitor theme with real-time clock and animated stats.
 */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-transparent text-[#00FF41] overflow-hidden relative selection:bg-[#00FF41] selection:text-black font-mono">
      
      {/* System Overlay Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none p-2 md:p-8 flex flex-col justify-between">
        
        {/* Top Bar */}
        <div className="flex justify-between items-start border-t border-l border-r border-[#00FF41]/30 p-2 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[10px] sm:text-xs">
            <span className="font-bold">{homeData.sysMonitorVersion}</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <span>STATUS: <span className="animate-pulse">{homeData.status}</span></span>
          </div>
          <div className="text-[10px] sm:text-xs font-bold">{time || "00:00:00"}</div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center relative my-4 overflow-y-auto pointer-events-auto">
          {/* Center Crosshair - Hidden on mobile to reduce clutter */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-[#00FF41]/10 pointer-events-none" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-[#00FF41]/10 pointer-events-none" />
          
          <div className={`relative z-30 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            {/* Module 1: Main Title (Span 8 on Desktop, 1 on Mobile) */}
            <div className="lg:col-span-8 border border-[#00FF41] bg-black/80 p-4 md:p-8 relative group hover:bg-black/90 transition-colors">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#00FF41]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#00FF41]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00FF41]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00FF41]" />
              
              <h2 className="text-[10px] md:text-xs text-[#00FF41]/50 mb-2 tracking-widest">{homeData.identityCore}</h2>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tighter break-words">
                {commonData.personal.role.split('_')[0]}_<br/>{commonData.personal.role.split('_')[1]}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#00FF41]/80 max-w-lg leading-relaxed border-l-2 border-[#00FF41]/30 pl-4">
                {commonData.personal.subtitle}
              </p>
              
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/projects" className="px-4 md:px-6 py-2 bg-[#00FF41] text-black text-xs md:text-sm font-bold hover:bg-[#003B00] hover:text-[#00FF41] border border-[#00FF41] transition-all flex items-center justify-center gap-2">
                  <Terminal className="w-3 h-3 md:w-4 md:h-4" /> {homeData.buttons.projects}
                </Link>
                <Link href="/contact" className="px-4 md:px-6 py-2 bg-transparent text-[#00FF41] text-xs md:text-sm font-bold border border-[#00FF41] hover:bg-[#00FF41]/10 transition-all flex items-center justify-center gap-2">
                  <Activity className="w-3 h-3 md:w-4 md:h-4" /> {homeData.buttons.contact}
                </Link>
              </div>
            </div>

            {/* Module 2: Stats (Span 4 on Desktop, 1 on Mobile) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6">
              {/* Stat Card 1 */}
              <div className="border border-[#00FF41]/50 bg-black/80 p-3 md:p-4 flex-1 relative overflow-hidden group min-w-[140px]">
                <div className="absolute top-0 right-0 p-1">
                  <Wifi className="w-3 h-3 md:w-4 md:h-4 text-[#00FF41]/50" />
                </div>
                <h3 className="text-[10px] md:text-xs text-[#00FF41]/50 mb-1">{homeData.stats.latency.label}</h3>
                <div className="text-lg md:text-2xl font-bold">{homeData.stats.latency.value} <span className="text-[10px] md:text-xs font-normal opacity-50">{homeData.stats.latency.sub}</span></div>
                <div className="w-full bg-[#00FF41]/20 h-1 mt-2">
                  <div className="bg-[#00FF41] h-full w-[80%] animate-pulse" />
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="border border-[#00FF41]/50 bg-black/80 p-3 md:p-4 flex-1 relative overflow-hidden group min-w-[140px]">
                <div className="absolute top-0 right-0 p-1">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#00FF41]/50" />
                </div>
                <h3 className="text-[10px] md:text-xs text-[#00FF41]/50 mb-1">{homeData.stats.security.label}</h3>
                <div className="text-lg md:text-2xl font-bold">{homeData.stats.security.value}</div>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-1 w-full bg-[#00FF41]" style={{opacity: i/5}} />
                  ))}
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="border border-[#00FF41]/50 bg-black/80 p-3 md:p-4 flex-1 relative overflow-hidden group min-w-[140px]">
                <div className="absolute top-0 right-0 p-1">
                  <Cpu className="w-3 h-3 md:w-4 md:h-4 text-[#00FF41]/50" />
                </div>
                <h3 className="text-[10px] md:text-xs text-[#00FF41]/50 mb-1">{homeData.stats.cpu.label}</h3>
                <div className="text-lg md:text-2xl font-bold">{homeData.stats.cpu.value} <span className="text-[10px] md:text-xs font-normal opacity-50">{homeData.stats.cpu.sub}</span></div>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`h-2 w-full ${i < 2 ? 'bg-[#00FF41]' : 'bg-[#00FF41]/20'}`} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end border-b border-l border-r border-[#00FF41]/30 p-2 bg-black/20 backdrop-blur-sm">
          <div className="text-[10px] md:text-xs opacity-50 max-w-[150px] md:max-w-[200px] truncate">
            {homeData.logs.accessGranted}
          </div>
          <div className="flex gap-2">
            <div className="w-12 md:w-20 h-1 bg-[#00FF41]/20">
              <div className="h-full bg-[#00FF41] w-[60%] animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}



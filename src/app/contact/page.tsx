"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse">
          /SYSTEM/CONNECT
        </h1>
        
        <div className="flex flex-col items-center justify-center gap-8 bg-[#0D0208]/90 p-6 md:p-10 border border-[#00FF41] shadow-[0_0_30px_rgba(0,255,65,0.15)]">
          <h2 className="text-xl font-mono text-[#00FF41] mb-4">ESTABLISH_CONNECTION</h2>
          
          <div className="flex flex-row gap-8">
            <a href="#" className="p-4 border border-[#00FF41] hover:bg-[#00FF41] hover:text-black text-[#00FF41] transition-all duration-300 group">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="p-4 border border-[#00FF41] hover:bg-[#00FF41] hover:text-black text-[#00FF41] transition-all duration-300 group">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="p-4 border border-[#00FF41] hover:bg-[#00FF41] hover:text-black text-[#00FF41] transition-all duration-300 group">
              <Twitter className="w-8 h-8" />
            </a>
          </div>

          <a
            href="mailto:contact@example.com"
            className="mt-6 py-3 px-8 border border-[#00FF41] text-[#00FF41] font-mono hover:bg-[#00FF41] hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            <Mail className="w-5 h-5" />
            SEND_TRANSMISSION
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

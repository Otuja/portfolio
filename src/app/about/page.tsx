"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse">
          /SYSTEM/ABOUT_ME
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-[600px] h-auto flex justify-center items-center"
          >
            <div className="relative w-full bg-[#0D0208]/90 border border-[#00FF41] rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.2)]">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#003B00] border-b border-[#00FF41]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-[#00FF41] font-mono">user_profile.json</span>
              </div>
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-[#00FF41] leading-relaxed">
                <p><span className="text-[#003B00]">const</span> <span className="text-white">developer</span> = <span className="text-[#00FF41]">{`{`}</span></p>
                <p className="pl-4"><span className="text-white">name</span>: <span className="text-[#00FF41]">"John Praise"</span>,</p>
                <p className="pl-4"><span className="text-white">role</span>: <span className="text-[#00FF41]">"Full Stack Engineer"</span>,</p>
                <p className="pl-4"><span className="text-white">status</span>: <span className="text-[#00FF41]">"Ready to Code"</span>,</p>
                <p className="pl-4"><span className="text-white">mission</span>: <span className="text-[#00FF41]">"Building the future of the web"</span></p>
                <p><span className="text-[#00FF41]">{`}`}</span>;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

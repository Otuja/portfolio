"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Three.js", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "Python", level: 60 },
  ];

  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse">
          /SYSTEM/MODULES
        </h1>
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="w-[140px] h-[100px] md:w-[180px] md:h-[120px] border border-[#00FF41] bg-[#0D0208]/90 flex flex-col items-center justify-center gap-2 hover:bg-[#003B00]/40 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
            >
              <div className="text-[#00FF41] font-bold text-xl md:text-3xl font-mono">
                {skill.level}%
              </div>
              <div className="text-[#00FF41]/80 font-mono text-xs md:text-sm tracking-wider">
                {skill.name.toUpperCase()}
              </div>
              <div className="w-[80%] h-1 bg-[#003B00] mt-2">
                <div
                  className="h-full bg-[#00FF41]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;

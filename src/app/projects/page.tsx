"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Modern Portfolio",
      desc: "High-performance portfolio website. Features immersive 3D backgrounds and smooth animations.",
      tags: ["Next.js", "Three.js", "Tailwind"],
      status: "DEPLOYED",
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with real-time inventory and secure payments.",
      tags: ["React", "Node.js", "MongoDB"],
      status: "ONLINE",
    },
    {
      title: "AI Task Manager",
      desc: "Smart task management app powered by AI to prioritize work.",
      tags: ["Python", "FastAPI", "OpenAI"],
      status: "BETA",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse">
          /SYSTEM/PROJECTS
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-full md:w-[400px] h-auto md:h-[250px] bg-[#0D0208]/90 border border-[#00FF41] p-6 hover:bg-[#003B00]/30 transition-all duration-300 group cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
            >
              <div className="absolute top-0 right-0 p-2 text-xs font-mono text-[#00FF41] bg-[#003B00] border-l border-b border-[#00FF41]">
                [{item.status}]
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00FF41] font-mono mb-4 group-hover:text-white transition-colors">
                {">"} {item.title}
              </h2>
              <p className="text-[#00FF41]/80 font-mono text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex gap-2 flex-wrap mt-4 md:absolute md:bottom-6 md:left-6">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs border border-[#00FF41]/50 text-[#00FF41] font-mono bg-[#003B00]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

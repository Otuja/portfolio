"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import projectsData from "@/data/projects.json";

/**
 * Projects Page Component
 * 
 * Lists portfolio projects with descriptions, tags, and links to source code.
 * Content is sourced from `projects.json`.
 */
const ProjectsPage = () => {
  const projects = projectsData.items;

  return (
    <main className="min-h-screen w-full bg-transparent overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
          {projectsData.title}
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10">
          {projects.map((item, index) => (
            <motion.a
              key={index}
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-full md:w-[400px] h-auto min-h-[250px] bg-[#0D0208]/90 border border-[#00FF41] p-6 hover:bg-[#003B00]/30 transition-all duration-300 group cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] flex flex-col justify-between"
            >
              <div>
                <div className="absolute top-0 right-0 p-2 text-xs font-mono text-[#00FF41] bg-[#003B00] border-l border-b border-[#00FF41]">
                  [{item.status}]
                </div>
                <div className="flex items-center justify-between mb-4 pr-16">
                  <h2 className="text-xl md:text-2xl font-bold text-[#00FF41] font-mono group-hover:text-white transition-colors">
                    {">"} {item.title}
                  </h2>
                </div>
                <p className="text-[#00FF41]/80 font-mono text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-[#00FF41]/50 text-[#00FF41] font-mono bg-[#003B00]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-[#00FF41] text-xs font-mono opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <Github className="w-4 h-4" />
                  <span>{projectsData.accessSourceCode}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

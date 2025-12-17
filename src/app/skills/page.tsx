"use client";

import React from "react";
import { motion } from "framer-motion";

import skillsData from "@/data/skills.json";

/**
 * Skills Page Component
 * 
 * Visualizes technical skills with progress bars and categories.
 * Content is sourced from `skills.json`.
 */
const SkillsPage = () => {
  const skillCategories = skillsData.categories;

  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-16 relative z-10 px-5 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse text-center drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] break-words w-full">
          {skillsData.title}
        </h1>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="w-full flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-2xl md:text-3xl text-[#00FF41] font-mono font-bold pl-4 border-l-4 border-[#00FF41]">
                {category.title}
              </h2>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00FF41]/10 to-transparent -z-10 blur-xl" />
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                  className="relative group h-[140px] bg-[#0D0208] border border-[#00FF41]/30 hover:border-[#00FF41] transition-all duration-300 overflow-hidden rounded-sm"
                >
                  {/* Background Grid Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FF41] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00FF41] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00FF41] opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FF41] opacity-50 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col items-center justify-center h-full gap-3 p-2 relative z-10">
                    <div className="relative">
                      <span className="text-3xl font-bold text-[#00FF41] font-mono group-hover:text-white transition-colors duration-300">
                        {skill.level}%
                      </span>
                      <div className="absolute -inset-2 bg-[#00FF41]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <span className="text-[#00FF41]/80 font-mono text-sm text-center font-bold tracking-wider group-hover:text-[#00FF41] transition-colors duration-300">
                      {skill.name}
                    </span>

                    {/* Progress Bar */}
                    <div className="w-[80%] h-1.5 bg-[#003B00] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-[#00FF41] shadow-[0_0_10px_#00FF41]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SkillsPage;

"use client";

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center flex-wrap">
        {[
            {
                title: "Modern Portfolio",
                desc: "A sleek, high-performance portfolio website built with Next.js 14, Three.js, and Tailwind CSS. Features immersive 3D backgrounds and smooth animations.",
                tags: ["Next.js", "Three.js", "Tailwind"],
                color: "from-purple-500 to-cyan-500"
            },
            {
                title: "E-Commerce Platform",
                desc: "Full-stack e-commerce solution with real-time inventory, secure payments, and an admin dashboard. Built for scalability and user experience.",
                tags: ["React", "Node.js", "MongoDB"],
                color: "from-blue-500 to-violet-500"
            },
            {
                title: "AI Task Manager",
                desc: "Smart task management app powered by AI to prioritize work and suggest schedules. Includes team collaboration features.",
                tags: ["Python", "FastAPI", "OpenAI"],
                color: "from-orange-500 to-red-500"
            }
        ].map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] w-full md:w-[350px] group cursor-pointer"
            >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="p-6 bg-[#0300145e] backdrop-blur-md h-full flex flex-col justify-between z-10 relative">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                            {item.title}
                        </h2>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag, i) => (
                             <span key={i} className="px-3 py-1 text-xs border border-[#7042f88b] rounded-full text-gray-200 bg-[#7042f810]">
                                {tag}
                             </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

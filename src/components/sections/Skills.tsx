"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
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
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Skills
      </h1>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-[150px] h-[150px] rounded-full border border-[#7042f88b] bg-[#0300145e] flex flex-col items-center justify-center gap-2 hover:bg-[#7042f830] transition-all duration-300 cursor-pointer"
          >
            <div className="text-white font-bold text-xl">{skill.level}%</div>
            <div className="text-gray-300">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

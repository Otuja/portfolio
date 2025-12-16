"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About Me
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full md:w-[500px] h-full flex justify-center items-center"
        >
            <div className="relative w-full h-[300px] bg-[#0300145e] border border-[#7042f88b] rounded-xl overflow-hidden backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#03001480] border-b border-[#7042f830]">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-gray-400">developer.js</span>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300">
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = <span className="text-blue-400">{`{`}</span></p>
                    <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-green-400">"John Praise"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-green-400">"Full Stack Engineer"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">skills</span>: <span className="text-blue-400">[</span></p>
                    <p className="pl-8"><span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Node.js"</span>,</p>
                    <p className="pl-8"><span className="text-green-400">"Three.js"</span>, <span className="text-green-400">"PostgreSQL"</span></p>
                    <p className="pl-4"><span className="text-blue-400">]</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">hardWorker</span>: <span className="text-orange-400">true</span></p>
                    <p><span className="text-blue-400">{`}`}</span>;</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

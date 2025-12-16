"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Hero3DObject from "../Hero3DObject";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <Hero3DObject />
      <div className="h-screen w-full flex flex-col justify-center items-center z-[20]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full flex flex-row items-center justify-center mb-5 bg-black/40 backdrop-blur-sm">
            <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="text-[13px] text-gray-200">
              Fullstack Developer Portfolio
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-center"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] border border-[#7042f88b] bg-[#0300145e] px-[20px] hover:bg-[#7042f830] transition-all duration-300"
        >
          Learn More!
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;

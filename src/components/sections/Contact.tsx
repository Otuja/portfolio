"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 w-full h-full"
      id="contact"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Me
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 mb-20 z-[20]">
        <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s work together!</h2>
        <div className="flex flex-row gap-6 mb-8">
            <a href="#" className="p-3 rounded-full border border-[#7042f88b] bg-[#0300145e] hover:bg-[#7042f830] transition-all duration-300 group">
                <Github className="text-gray-300 group-hover:text-white w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-[#7042f88b] bg-[#0300145e] hover:bg-[#7042f830] transition-all duration-300 group">
                <Linkedin className="text-gray-300 group-hover:text-white w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-[#7042f88b] bg-[#0300145e] hover:bg-[#7042f830] transition-all duration-300 group">
                <Twitter className="text-gray-300 group-hover:text-white w-6 h-6" />
            </a>
        </div>
        <a
            href="mailto:contact@example.com"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] bg-[#0300145e] px-[20px] hover:bg-[#7042f830] transition-all duration-300"
        >
            Send me an email
        </a>
      </div>
      
      <div className="w-full flex justify-center items-center text-gray-400 text-sm pb-8">
        &copy; 2025 Portfolio. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;

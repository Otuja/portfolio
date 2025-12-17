"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutData from "@/data/about.json";

/**
 * About Page Component
 * 
 * Displays detailed information about the developer, including bio, education, experience, and skills.
 * Content is sourced from `about.json`.
 * Uses Framer Motion for entrance animations.
 */
const AboutPage = () => {
  return (
    <main className="min-h-screen w-full bg-black overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
          {aboutData.title}
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Bio & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Profile Card */}
            <div className="relative w-full bg-[#0D0208]/90 border border-[#00FF41] rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.2)]">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#003B00] border-b border-[#00FF41]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-[#00FF41] font-mono">{aboutData.profile.label}</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base text-[#00FF41] leading-relaxed">
                <p><span className="text-[#003B00]">const</span> <span className="text-white">developer</span> = <span className="text-[#00FF41]">{`{`}</span></p>
                <p className="pl-4"><span className="text-white">name</span>: <span className="text-[#00FF41]">"{aboutData.profile.data.name}"</span>,</p>
                <p className="pl-4"><span className="text-white">role</span>: <span className="text-[#00FF41]">"{aboutData.profile.data.role}"</span>,</p>
                <p className="pl-4"><span className="text-white">location</span>: <span className="text-[#00FF41]">"{aboutData.profile.data.location}"</span>,</p>
                <p className="pl-4"><span className="text-white">status</span>: <span className="text-[#00FF41]">"{aboutData.profile.data.status}"</span>,</p>
                <p className="pl-4"><span className="text-white">bio</span>: <span className="text-[#00FF41]">"{aboutData.profile.data.bio}"</span></p>
                <p><span className="text-[#00FF41]">{`}`}</span>;</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="border border-[#00FF41]/50 p-6 bg-black/50">
              <h2 className="text-xl text-[#00FF41] font-mono mb-4 border-b border-[#00FF41]/30 pb-2">{aboutData.education.title}</h2>
              <div className="space-y-4">
                {aboutData.education.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-white font-bold font-mono">{item.degree}</h3>
                    <p className="text-[#00FF41]/80 text-sm font-mono">{item.school} • {item.year}</p>
                    {item.details && <p className="text-gray-400 text-xs mt-1 font-mono">{item.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <a 
              href={aboutData.resume.file} 
              download
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#00FF41]/10 border border-[#00FF41] hover:bg-[#00FF41] transition-all duration-300 cursor-pointer"
            >
              <span className="text-[#00FF41] font-mono font-bold group-hover:text-black">{aboutData.resume.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF41] group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          {/* Right Column: Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
             <div className="border border-[#00FF41] p-6 bg-black/80 h-full">
              <h2 className="text-xl text-[#00FF41] font-mono mb-6 border-b border-[#00FF41]/30 pb-2">{aboutData.experience.title}</h2>
              
              <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:h-full before:w-[1px] before:bg-[#00FF41]/30">
                {aboutData.experience.items.map((job, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute left-[3px] top-1.5 w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-[#00FF41] shadow-[0_0_10px_#00FF41] left-0 w-4 h-4' : 'bg-[#00FF41]/50'}`} />
                    <h3 className="text-white font-bold font-mono text-lg">{job.role}</h3>
                    <p className="text-[#00FF41] text-sm font-mono mb-2">{job.company} • {job.period}</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm font-mono space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="border border-[#00FF41]/50 p-6 bg-black/50">
               <h2 className="text-xl text-[#00FF41] font-mono mb-4 border-b border-[#00FF41]/30 pb-2">{aboutData.skills.title}</h2>
               <div className="flex flex-wrap gap-3">
                 {aboutData.skills.items.map((skill, i) => (
                   <span key={i} className="px-3 py-1 bg-[#003B00] text-[#00FF41] text-sm font-mono rounded-full border border-[#00FF41]/30">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            {/* Hobbies Section */}
            <div className="border border-[#00FF41]/50 p-6 bg-black/50">
               <h2 className="text-xl text-[#00FF41] font-mono mb-4 border-b border-[#00FF41]/30 pb-2">{aboutData.hobbies.title}</h2>
               <p className="text-gray-400 font-mono text-sm leading-relaxed">
                 {aboutData.hobbies.description.split('{0}')[0]}
                 <span className="text-[#00FF41]">{aboutData.hobbies.highlights[0]}</span>
                 {aboutData.hobbies.description.split('{0}')[1].split('{1}')[0]}
                 <span className="text-[#00FF41]">{aboutData.hobbies.highlights[1]}</span>
                 {aboutData.hobbies.description.split('{1}')[1].split('{2}')[0]}
                 <span className="text-[#00FF41]">{aboutData.hobbies.highlights[2]}</span>
                 {aboutData.hobbies.description.split('{2}')[1]}
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

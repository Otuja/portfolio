"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MessageCircle, MapPin, ExternalLink } from "lucide-react";

import contactData from "@/data/contact.json";
import commonData from "@/data/common.json";

/**
 * Contact Page Component
 * 
 * Provides various ways to connect with the developer (WhatsApp, Email, Social Media).
 * Content is sourced from `contact.json` and `common.json`.
 */
const ContactPage = () => {
  return (
    <main className="min-h-screen w-full bg-transparent overflow-y-auto pb-20 pt-[65px]">
      <div className="flex flex-col items-center justify-start pt-24 md:pt-32 gap-10 relative z-10 px-5 md:px-10 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#00FF41] font-mono tracking-widest animate-pulse drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
          {contactData.title}
        </h1>
        
        <div className="w-full flex flex-col gap-8">
          {/* Main Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* WhatsApp Card */}
            <motion.a
              href={commonData.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative bg-[#0D0208]/90 border border-[#00FF41] p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#003B00]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-[#00FF41]" />
              </div>
              <div className="p-4 bg-[#00FF41]/10 rounded-full group-hover:bg-[#00FF41] transition-colors duration-300">
                <MessageCircle className="w-10 h-10 text-[#00FF41] group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold font-mono text-white mb-1">{contactData.whatsapp.title}</h2>
                <p className="text-[#00FF41] font-mono text-sm">{contactData.whatsapp.subtitle}</p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href={`mailto:${commonData.personal.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative bg-[#0D0208]/90 border border-[#00FF41] p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#003B00]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-[#00FF41]" />
              </div>
              <div className="p-4 bg-[#00FF41]/10 rounded-full group-hover:bg-[#00FF41] transition-colors duration-300">
                <Mail className="w-10 h-10 text-[#00FF41] group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold font-mono text-white mb-1">{contactData.email.title}</h2>
                <p className="text-[#00FF41] font-mono text-sm">{contactData.email.subtitle}</p>
              </div>
            </motion.a>
          </div>

          {/* Social Links & Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full bg-[#0D0208]/90 border border-[#00FF41]/50 p-6 md:p-8"
          >
            <h3 className="text-[#00FF41] font-mono text-lg mb-6 border-b border-[#00FF41]/30 pb-2">{contactData.social.title}</h3>
            
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", href: commonData.personal.social.github },
                  { icon: Linkedin, label: "LinkedIn", href: commonData.personal.social.linkedin },
                  { icon: Twitter, label: "Twitter", href: commonData.personal.social.twitter },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 border border-[#00FF41]/30 hover:border-[#00FF41] hover:bg-[#00FF41] group transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-[#00FF41] group-hover:text-black transition-colors" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[#00FF41]/80 font-mono text-sm border-l-0 md:border-l border-[#00FF41]/30 pl-0 md:pl-6">
                <MapPin className="w-4 h-4" />
                <span>{commonData.personal.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

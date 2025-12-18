import React from "react";
import commonData from "@/data/common.json";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-[#00FF41] shadow-lg p-[15px] relative z-20 border-t border-[#00FF41]/30 font-mono">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mt-[20px] gap-10 md:gap-0">
          
          {/* Community */}
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a href={commonData.personal.social.telegram} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Telegram</span>
            </a>
            <a href={commonData.personal.social.discord} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href={commonData.personal.social.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a href={commonData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          {/* About */}
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <Link href="/about" className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </Link>
            <a href={`mailto:${commonData.personal.email}`} className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">{commonData.personal.email}</span>
            </a>
          </div>
        </div>

        <div className="m-[20px] text-[15px] text-center">
          &copy; 2025 {commonData.personal.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
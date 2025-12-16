import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-[#00FF41] shadow-lg p-[15px] relative z-20 border-t border-[#00FF41]/30 font-mono">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mt-[20px] gap-10 md:gap-0">
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Telegram</span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="w-full sm:w-auto min-w-[150px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[5px] cursor-pointer hover:text-white transition-colors">
              <span className="text-[15px] ml-[6px]">contact@example.com</span>
            </p>
          </div>
        </div>

        <div className="m-[20px] text-[15px] text-center">
          &copy; 2025 Johnpraise Portfolio. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

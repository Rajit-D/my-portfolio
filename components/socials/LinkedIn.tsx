import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const LinkedIn = () => {
  return (
    <div className="lg:col-span-1 col-span-2 w-full p-2 bg-[#393E41] rounded-2xl text-white flex justify-between flex-col lg:h-[120px] h-[100px]">
      <FaLinkedinIn className="text-[30px] ml-2 mb-4" />
      <div className="pattern flex justify-center items-center">
        <div className="circle w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="relative line w-[100%] bg-white h-0.5 top-[0.35px]"></div>
        <div className="circle w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="sociallink text-right mt-2 mr-2">rajit@gmail.com</div>
    </div>
  );
};

export default LinkedIn;

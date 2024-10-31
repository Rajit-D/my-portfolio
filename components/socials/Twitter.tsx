import React from "react";
import { BsTwitterX } from "react-icons/bs";

const Twitter = () => {
  return (
    <div className="w-full p-2 bg-[#313628] rounded-2xl text-white flex justify-between flex-col mr-5 lg:h-[120px]">
      <BsTwitterX className="text-[30px] ml-2 mb-4" />
      <div className="pattern flex justify-center items-center">
        <div className="circle w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="relative line w-[100%] bg-white h-0.5 top-[0.35px]"></div>
        <div className="circle w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="sociallink text-right mt-2 mr-2">rajit@gmail.com</div>
    </div>
  );
};

export default Twitter;
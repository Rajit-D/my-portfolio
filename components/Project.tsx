"use client";

import React, { useEffect, useState } from "react";
import Tags from "./Tags";

interface colType {
  col: string;
  wordLimit: number;
}

const Project: React.FC<colType> = ({ col, wordLimit }) => {
  const [isMobile, setIsMobile] = useState(false);
  const content =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, vero! Dolorem, aperiam facilis perspiciatis a corporis rerum voluptatum nondoloremque est, ad provident nostrum ex nemo nesciunt. Nemo odit hicnecessitatibus nostrum animi quidem dolore expedita sunt, minimamolestiae impedit, sequi quos magni repudiandae magnam? Delectuslaudantium porro voluptate doloremque, tempore obcaecati alias adblanditiis aliquam sed quos dolor, eveniet quam animi sequi rerumperspiciatis vero? Sit voluptas tenetur laborum cum vero porro, earumiste voluptates sapiente quos sed harum.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      className={`flex ${col} max-sm:col-span-1 justify-between w-full flex-col gap-y-2 bg-[#DEA54B] text-black p-4 rounded-3xl`}
    >
      <div className="section1 flex flex-col items-start">
        <div className="heading text-3xl">Project Name</div>
        <div className="tags flex flex-row items-center flex-wrap gap-x-2">
          <Tags name="fullstack" color="696D7D" size="12px" />
          <Tags name="gsap" color="696D7D" size="12px" />
          <Tags name="responsive" color="696D7D" size="12px" />
          <Tags name="MERN" color="696D7D" size="12px" />
        </div>
      </div>
      <div className="description mt-4">
        {content.slice(0, isMobile ? 100 : wordLimit) + "  ..."}
        <b>Read More.</b>
      </div>
    </div>
  );
};

export default Project;

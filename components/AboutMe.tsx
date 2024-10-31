import React from "react";
import Image from "next/image";
import img from "../public/pic.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Twitter from "./socials/Twitter";
import Email from "./socials/Email";
import LinkedIn from "./socials/LinkedIn";

const AboutMe = () => {
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col w-[94%] my-4">
      <div
        className="box1 relative bg-cover bg-no-repeat lg:h-[600px] h-[400px] lg:w-1/3 rounded-3xl flex justify-start flex-col p-7"
        style={{ backgroundImage: `url(/image.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        <p className="relative greetings text-white lg:text-2xl text-lg font-light">
          Hello,
        </p>
        <p className="relative name text-white lg:text-[80px] text-[60px] w-[80%] lg:leading-[4.5rem] leading-[3.5rem] mt-2">
          My name is Rajit.
        </p>
      </div>
      <div className="box2 lg:w-2/3 lg:mt-0 mt-5 w-[94%] lg:h-[600px] flex justify-start flex-col lg:ml-9">
        <div className="intro lg:h-3/5 flex justify-center flex-col py-10 mb-4 w-full border-b-2 border-black">
          <div className="flex justify-between relative bottom-7">
            <h1 className="lg:text-5xl text-4xl h-1/3">Introduction</h1>
            <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
          </div>
          <div className="border border-black rounded-xl lg:mt-2 p-4 h-[90%]">
            <h2 className="lg:text-3xl text-2xl mt-3">
              A web developer based in Kolkata, India
            </h2>
            <div className="w-full h-full flex justify-center items-center lg:flex-row flex-col">
              <p className="text-lg leading-tight lg:mt-0 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                assumenda culpa expedita sed quia amet obcaecati, aperiam
                cumque, commodi unde porro sunt molestias magnam, officiis
                voluptas molestiae vitae? Commodi eaque, necessitatibus modi
                omnis laudantium vel quisquam veniam neque dicta? Officia,
                excepturi? Ex voluptate maiores voluptatibus! Eligendi nobis ut
                accusamus, a voluptas blanditiis!
              </p>
              <Image
                src={img}
                height={250}
                width={250}
                alt="Picture"
                className="relative lg:bottom-9 bottom-6"
              />
            </div>
          </div>
        </div>
        <div className="socials h-2/5 flex justify-center flex-col">
          <div className="intro h-full flex justify-center flex-col lg:py-10 w-full">
            <div className="flex justify-between lg:mb-2">
              <h1 className="lg:text-5xl text-4xl h-1/3">Get in touch</h1>
              <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-y-2 gap-x-2 mt-8">
              <Twitter />
              <Email />
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

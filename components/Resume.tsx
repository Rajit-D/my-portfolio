import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Tags from "./Tags";
import Project from "./Project";

const Resume = () => {
  interface libraryType {
    id: number;
    name: string;
    designation: string;
    image: string;
  }
  const libraries: libraryType[] = [
    {
      id: 1,
      name: "Javascript",
      designation: "",
      image:
        "https://icon2.cleanpng.com/20180824/qlv/kisspng-javascript-clip-art-openclipart-logo-number-1713949408965.webp",
    },
    {
      id: 2,
      name: "Typescript",
      designation: "",
      image: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
      id: 3,
      name: "React JS",
      designation: "",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    },
    {
      id: 4,
      name: "Next JS",
      designation: "",
      image:
        "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg",
    },
    {
      id: 5,
      name: "GreenSock",
      designation: "",
      image:
        "https://ihatetomatoes.net/wp-content/uploads/2016/09/img_greensock.png",
    },
    {
      id: 6,
      name: "Node JS",
      designation: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58vqUp2cFD3RvLzjh14v3xbaAK-e9maiJUw&s",
    },
    {
      id: 7,
      name: "Hono JS",
      designation: "",
      image:
        "https://pbs.twimg.com/profile_images/1562960963359293446/rGjvMLR1_400x400.jpg",
    },
    {
      id: 8,
      name: "Tailwind CSS",
      designation: "",
      image: "https://img.icons8.com/?size=512&id=WoopfRcDj3RF&format=png",
    },
  ];
  return (
    <div
      className="flex justify-between items-stretch lg:flex-row flex-col w-[94%] my-6"
      id="resume"
    >
      <div className="skills flex flex-col justify-between lg:w-1/3 lg:mt-4 lg:pr-6 lg:mx-0 mx-4 lg:border-t-0 border-t-2 border-black">
        <div className="expertise border-b-2 border-black h-1/5 my-5 pb-3">
          <div className="flex justify-between">
            <h1 className="lg:text-5xl text-4xl mb-3">Expertise</h1>
            <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
          </div>
          <p className="text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, suscipit quos doloremque eum nobis ratione.
          </p>
        </div>
        <div className="hardskill lg:mt-0 mt-1 border-b-2 border-black h-3/5 flex flex-col items-stretch justify-between">
          <div className="flex justify-between mb-2">
            <h1 className="lg:text-5xl text-4xl">Hardskills</h1>
            <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
          </div>
          <div className="box w-full bg-black h-[79%] rounded-[50px] mb-6 flex flex-col items-center pb-3 pt-2 px-5">
            <div
              className="innerbox rounded-[50px] m-3 h-full w-full lg:block hidden relative bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(/dev.jpg)` }}
            ></div>
            <div className="flex flex-row items-center justify-center mt-2 mr-3">
              <AnimatedTooltip items={libraries} />
            </div>
          </div>
        </div>
        <div className="softskill lg:mt-0 mt-2 h-[30%]">
          <div className="flex justify-between mb-2 mt-5">
            <h1 className="lg:text-5xl text-4xl">Softskills</h1>
            <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
          </div>
          <div className="tag-group flex flex-wrap gap-x-2">
            <Tags name="Creativity" color="280004" size="16px" />
            <Tags name="Teamwork" color="071013" size="16px" />
            <Tags name="Time_Management" color="1C0118" size="16px" />
            <Tags name="Flexibility" color="222222" size="16px" />
            <Tags name="Communication" color="32161F" size="16px" />
          </div>
        </div>
      </div>
      <div className="projects h-full lg:w-2/3 lg:pl-6 mt-9 lg:mx-0 mx-4 lg:border-l-2 lg:border-t-0 border-t-2 border-black">
        <div className="flex justify-between mb-1 lg:mt-0 mt-6">
          <h1 className="lg:text-5xl text-4xl lg:mb-3">Projects</h1>
          <IoIosArrowDropdown className="lg:text-[43px] text-[34px] text-center" />
        </div>
        <div className="project lg:mt-0 mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
          <Project col="col-span-1" wordLimit={100} />
          <Project col="col-span-1" wordLimit={100} />
          <Project col="col-span-1" wordLimit={100} />
          <Project col="col-span-2" wordLimit={310} />
          <Project col="col-span-1" wordLimit={100} />
          <Project col="col-span-1" wordLimit={100} />
          <Project col="col-span-2" wordLimit={310} />
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center m-4 py-3 font-light Lg:border-y-2 lg:border-black w-[98%]">
      <div className="nav1 flex items-center ml-6">
        <div className="rounded-full bg-black w-6 h-6"></div>
        <div className="navitems lg:text-[30px] text-[20px] flex lg:mx-[50px] mx-[30px]">
          <div className="lg:mr-8 lg:block hidden">about me.</div>
          <div className="lg:mr-8 lg:block hidden">resume.</div>
        </div>
      </div>
      <div className="mr-6 nav2">
        <button className="bg-black rounded-full text-white px-4 py-2">
          Download my CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

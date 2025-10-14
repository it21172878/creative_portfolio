import React from "react";

const Nav = () => {
  return (
    <div className=" transition-all duration-200 h-[12vh] z-[10000] fixed w-full">
      <div className=" flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

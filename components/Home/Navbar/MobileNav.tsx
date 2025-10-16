import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "traslate-x-0" : "translate-x-[100%]";
  return (
    <div>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[10002] bg-black opacity-70 w-full h-screen`}
      >
        {/* NAV LINKS */}
        <div
          className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}
        >
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base text-white font-medium font-space-mono hover:text-cyan-300 transition-all duration-200"
            >
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-space-mono">
                {link.label}
              </p>
            </Link>
          ))}
          {/* CROSS ICON */}
          <CgClose
            onClick={closeNav}
            className=" absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

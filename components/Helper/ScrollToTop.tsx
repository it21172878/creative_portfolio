"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  //   SCROLL TO TOP FUNCTIONALITY TO BE ADDED
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-bounce right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          title="Scroll To Top"
          className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

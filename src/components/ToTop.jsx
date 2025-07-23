import React from "react";
import ToTopIcon from "../assets/to-top.webp";
import { useState, useEffect } from "react";

const ToTop = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleTop = () => {
      if (window.scrollY > 600) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleTop);

    return () => window.removeEventListener("scroll", handleTop);
  });

  return (
    <a
      href="#home"
      className={
        isTop
          ? "fixed right-[30px] bottom-[20px] bg-[#fff] p-[15px] shadow-sm cursor-pointer rounded-[5px]"
          : "none"
      }
    >
      <img src={ToTopIcon} alt="totopicon" width={30} />
    </a>
  );
};

export default ToTop;

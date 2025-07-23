import React from "react";
import { useEffect, useState } from "react";
import Logo from "../assets/Britlex.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  })

  const navItem = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About Us", href: "#aboutus" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={isScrolled ? "fixed w-full shadow-md bg-[#fffffffa] transition-shadow duration-300 z-50" : "fixed w-full z-50"}>
    <div className="flex  max-w-[1200px] bg-transparent  mx-auto justify-between items-center py-[20px]">
      <a href="#home">
        <img src={Logo} alt="" className="w-[80px]" />
      </a>
      <nav>
        <ul className="flex text-[15px] gap-[25px] text-[#263238]">
          {navItem.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <button className="border-[2px] border-[#263238] rounded-[5px] px-[40px] py-[10px] text-[15px] cursor-pointer hover:bg-[#263238] hover:text-[#fff]">
          Let’s Talk
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;

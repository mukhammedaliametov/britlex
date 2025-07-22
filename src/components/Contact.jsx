import React from "react";
import ContactImg from "../assets/contact_img.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto my-[150px] flex justify-between items-center gap-[60px]"
    >
      <div>
        <img src={ContactImg} alt="contact_img" width={600} />
      </div>
      <div>
        <h2 className="font-semibold text-[38px]">Contact Us</h2>
        <p className="text-[16px] text-[#8F95A5] my-[30px]">
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </p>
        <div>
            <input type="email" placeholder="Enter Your E-mail" className="border-[1px] border-[#8F95A5] py-[18px] px-[30px] rounded-[10px] w-[50%]" />
            <button className="bg-[#263238] border-[2px] border-[#263238] text-[#fff] px-[50px] py-[18px] rounded-[10px] ml-2 cursor-pointer hover:text-[#263238] hover:bg-transparent">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import speaking_card from "../assets/speaking_card.png";
import writing_card from "../assets/writing_card.png";
import listening_card from "../assets/listening_card.png";
import reading_card from "../assets/reading_card.png";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1200px] mx-auto my-[50px] pt-[80px]">
      <h2 className="text-center font-semibold text-[38px]">Skills</h2>
      <div className="flex items-center gap-[20px] mt-[40px]">
        <div className="bg-[#F5F5F5] p-[30px] rounded-[10px] w-[80%] h-[800px]" data-aos="fade-up">
          <img src={speaking_card} alt="skills_card1" width={300} />
          <h3 className="py-[20px] font-semibold text-[25px]">Speaking</h3>
          <p className="text-[#8F95A5] text-[15px]">
            Improve your English skills and confidence. Live classes and
            interactive lessons online. 20% extra free for a limited time only{" "}
            <br />
            <br />
            Learn English online and improve your skills through our
            high-quality courses and resources – all designed for adult language
            learners.
          </p>
          <button className="bg-[#263238] border-[2px] text-[15px] py-[15px] px-[50px] my-[35px] rounded-[5px] text-[#fff] cursor-pointer hover:border-[2px] hover:bg-transparent border-[#263238] hover:text-[#263238]">
            Learn More
          </button>
        </div>
        <div>
          <div className="flex justify-between items-center gap-[20px]">
            <div className="bg-[#F5F5F5] p-[30px] pt-0 rounded-[10px] h-[480px]" data-aos="fade-up">
              <img src={writing_card} alt="skills_card2" className="w-[240px] ml-[100px]" />
              <h3 className="pb-[10px] font-semibold text-[25px]">Writing</h3>
              <p className="text-[#8F95A5] text-[15px]">
                One of the most important and extensive areas of natural
                science, the science that studies substances, also their
                composition{" "}
              </p>
              <button className="bg-[#263238] border-[2px] text-[15px] py-[15px] px-[50px] mt-[15px]  rounded-[5px] text-[#fff] cursor-pointer hover:border-[2px] hover:bg-transparent border-[#263238] hover:text-[#263238]">Learn More</button>
            </div>
            <div className="bg-[#F5F5F5] p-[40px] rounded-[10px] h-[480px] pl-[0px] pt-0" data-aos="fade-up">
              <img src={reading_card} alt="skills_card3" className="w-[320px]" />
              <h3 className="pb-[10px] pt-[10px] font-semibold text-[25px] pl-[30px]">Reading</h3>
              <p className="pl-[30px] text-[#8F95A5] text-[15px]">
                perception and response actions of the user resulting from the
                use and/or upcoming use of the product, system or service
              </p>
              <button className="bg-[#263238] ml-[30px] border-[2px] text-[15px] py-[15px] px-[50px] mt-[15px]  rounded-[5px] text-[#fff] cursor-pointer hover:border-[2px] hover:bg-transparent border-[#263238] hover:text-[#263238]">Learn More</button>
            </div>
          </div>
          <div className="flex bg-[#F5F5F5] p-[30px] rounded-[10px] mt-[20px] h-[300px]" data-aos="fade-down">
            <div>
              <h3 className="pb-[10px] font-semibold text-[25px] mt-[30px]">Listening</h3>
              <p className=" text-[#8F95A5] text-[15px]">
                Here you can find activities to practise your listening skills.
                Listening will help you to improve your understanding{" "}
              </p>
              <button className="bg-[#263238] border-[2px] text-[15px] py-[15px] px-[50px] mt-[15px]  rounded-[5px] text-[#fff] cursor-pointer hover:border-[2px] hover:bg-transparent border-[#263238] hover:text-[#263238]">Learn More</button>
            </div>
            <div>
              <img src={listening_card} alt="skills_card4" className="w-[900px] mt-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

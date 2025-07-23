import React from "react";
import PricingImg1 from "../assets/pricing_card1.png";
import PricingImg2 from "../assets/pricing_card2.png";
import PricingImg3 from "../assets/pricing_card3.png";

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-[1200px] mx-auto pt-[80px]">
      <h2 className="text-center font-semibold text-[38px]">Pricing</h2>
      <div className="flex items-center gap-[30px] mt-[30px]" data-aos="fade-up">
        <div className="w-[40%]">
          <img src={PricingImg1} width={280} alt="pricing_card_img_1" />
          <h3 className="text-[#263238] text-[20px] font-semibold my-[15px]">Self-study online course</h3>
          <p className="text-[#8F95A5] text-[16px]">
            Start learning English online in live classes with qualified EC
            teachers and students from all over the world.
          </p>
          <div className="inline-block bg-[#EEEEEE] my-[20px] py-[5px] px-[20px] rounded-[5px]">
            <p className="flex items-center gap-2"><span className="text-[20px]">£5.99</span> per month</p>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={PricingImg2} width={340} alt="pricing_card_img_2" />
          <h3 className="text-[#263238] text-[20px] font-semibold my-[15px]">Live online classes</h3>
          <p className="text-[#8F95A5] text-[16px]">
            Interactive group classes with expert teachers. Free 7-day trial
          </p>
          <div className="inline-block bg-[#EEEEEE] mt-[30px] py-[5px] px-[20px] rounded-[5px]">
            <p className="flex items-center gap-2"><span className="text-[20px]">£12.99</span> per month</p>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={PricingImg3} width={300} alt="pricing_card_img_3" className="h-[250px]" />
          <h3 className="text-[#263238] text-[20px] font-semibold my-[13px]">Personal Tuition</h3>
          <p className="text-[#8F95A5] text-[16px]">
            Online one-to-one English tutoring – enjoy our first session for
            only $1
          </p>
          <div className="inline-block bg-[#EEEEEE] mt-[30px] py-[5px] px-[20px] rounded-[5px]">
            <p className="flex items-center gap-2"><span className="text-[20px]">£20.99</span> per month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

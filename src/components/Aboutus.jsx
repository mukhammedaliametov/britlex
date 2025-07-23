import React from "react";
import AboutImg from '../assets/about_img.png';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Aboutus = () => {
    const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,     
  });
  return (
    <div id="aboutus" ref={ref} className="max-w-[1200px] mx-auto my-[100px] pt-[80px] flex justify-between items-center gap-[30px]" data-aos="fade-up"> 
      <div className="w-[500px]">
        <h2 className="font-semibold text-[38px]">About Us</h2>
        <p className="text-[#8F95A5] my-[20px] text-[16px] ">
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </p>
        <div className="flex items-center justify-between text-center mt-[40px]">
            <div>
                {inView && <CountUp end={800} duration={3} className="text-[#2A3246] text-[35px] font-semibold" />}
                <p className="text-[#8F95A5] text-[15px]">Pupils</p>
            </div>
            <div>
                {inView && <CountUp end={18} duration={3} className="text-[#2A3246] text-[35px] font-semibold" />}
                <p className="text-[#8F95A5] text-[15px]">Teachers</p>
            </div>
            <div>
                {inView && <CountUp end={6} duration={3} className="text-[#2A3246] text-[35px] font-semibold" />}
                <p className="text-[#8F95A5] text-[15px]">Foregin Languages</p>
            </div>
        </div>
      </div>
      <div>
        <img src={AboutImg} alt="about_img" className="w-[450px]" />
      </div>
    </div>
  );
};

export default Aboutus;

import React from 'react';
import HeroImg from '../assets/hero_img.png';
import LightIcon from '../assets/light_icon.png';

const Hero = () => {
    return (
        <div id='home' className='max-w-[1200px] mx-auto flex justify-between gap-[40px] pt-[80px]' data-aos="fade-up">
            <div className='w-[60%] mt-[40px]' > 
                <h1 className='text-[44px] font-semibold'>Learn <br /> Any Foreign <br /> Language</h1>
                <p className='text-[18px] py-[35px] w-[70%] text-[#8F95A5]'>With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
                <button className='bg-[#263238] border-[2px] text-[18px] py-[20px] px-[60px] rounded-[15px] text-[#fff] cursor-pointer hover:border-[2px] hover:bg-transparent border-[#263238] hover:text-[#263238]'>Get Started</button>
                <img src={LightIcon} alt="light_icon" width={80} className='relative z-[-1] left-[285px] top-[-350px]' />
            </div>
            <div>
                <img src={HeroImg} alt="hero_img" width={550} />
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import Logo from '../assets/Britlex.png';

const Footer = () => {
    return (
        <div className='max-w-[1200px] mx-auto border-t-[1px] border-[#C4C4C4] py-[30px] mb-[20px] flex justify-between items-center'>
           <div>
             <img src={Logo} alt="logo" />
           </div>
           <div className='flex gap-[30px]'>
            <a href="javascript:void(0)" className='text-[#8F95A5]'>Terms and Conditions</a>
            <a href="javascript:void(0)" className='list-item text-[#8F95A5]'>Privacy Policy</a>
            <a href="javascript:void(0)" className='list-item text-[#8F95A5]'>Cookie Policy</a>
           </div>
        </div>
    );
};

export default Footer;
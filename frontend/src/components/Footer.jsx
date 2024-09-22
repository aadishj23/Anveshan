import React from 'react';
import Anveshan from '../assets/logo_bg_remove.png';
import Instagram from '../assets/Socials/Instagram.svg';
import Linkedin from '../assets/Socials/Linkedin.svg';
import Twitter from '../assets/Socials/x.svg';
import Youtube from '../assets/Socials/Youtube.svg';

function Footer() {
  return (
    <div className='bg-black'>
      <hr/>
      <div className='flex flex-col md:flex-row justify-between items-center px-20'>
        <img src={Anveshan} alt='Anveshan Logo' className='h-8 w-auto my-4' />
        <div className='my-4' >
            <div className='flex space-x-6 mb-2'>
              <a href="https://www.instagram.com/anveshan.bpit/" target='_blank' rel="noopener noreferrer">
                <img src={Instagram} alt='Instagram' className='h-7 w-auto hover:opacity-80 transition-opacity' />
              </a>
              <a href="https://www.linkedin.com/company/anveshan-community/" target='_blank' rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin" className='h-7 w-auto hover:opacity-80 transition-opacity' />
              </a>
              <a href="https://x.com/An_veshan" target='_blank' rel="noopener noreferrer">
                <img src={Twitter} alt='Twitter' className='h-7 w-auto hover:opacity-80 transition-opacity' />
              </a>
              <a href="https://www.youtube.com/@anveshan_bpit" target='_blank' rel="noopener noreferrer">
                <img src={Youtube} alt='LeetCode' className='h-7 w-auto hover:opacity-80 transition-opacity' />
              </a>
            </div>
            <p className='text-white text-center'>Follow us</p>
        </div>
      </div>
      <p className='text-center text-white pb-2'>
        © All Rights Reserved | Design by Team Anveshan
      </p>
    </div>
  );
}

export default Footer;

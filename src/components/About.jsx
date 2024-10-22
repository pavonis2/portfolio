import React from 'react';
import India from "../assets/india.jpg"
import { BiLogoGmail } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' name='about' className='w-full h-screen '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Rohan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className=''>I am a self taught <span className='font-bold text-xl text-orange-500'>Frontend developer</span> for a keen eye for visual communication based in a small 
              city called Hyderabad from the Golden Sparrow, The Subcontinent <img src={India} className="h-14 inline" />. If you are hiring a junior 
              frontend developer, here's my <a 
                href="" 
                className='font-bold text-xl text-cyan-400 cursor-pointer'
                target="_blank"
                rel="noopener noreferrer"
                download
              ><FaFilePdf color='red' className='inline' size={19}/>RESUME
              </a>. Get in touch at <BiLogoGmail className='inline text-red-500' size={24}/> <span className='font-bold'>f20180826P@alumni.bits-pilani.ac.in</span>.
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
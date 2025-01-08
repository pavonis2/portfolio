import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { TbFileCv } from "react-icons/tb";
import resume from "../assets/resume.pdf"

const Main = () => {
  return (
    <div id='main'>
      <img 
        className='w-full h-screen object-cover scale-x-[-1]'
        src="https://images.pexels.com/photos/1174132/pexels-photo-1174132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold sm:text-gray-800 text-white'>I'm ROHAN</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 sm:text-gray-800 text-white'>
            I'm a 
            <TypeAnimation
              sequence={[
                'Developer',2000,
                'Coder',2000,
                'Tech Enthusiast',2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[150px] w-full '>
            <a href="https://github.com/pavonis2" target='_blank'>
              <FaGithub color='white' size={30} className='cursor-pointer hover:animate-bounce'/>
            </a>
            <a href="https://www.linkedin.com/in/rohan-mv/" target='_blank'>
              <FaLinkedin color='white' size={30} className='cursor-pointer hover:animate-bounce'/>
            </a>
            <a href={resume} target='_blank'>
              <TbFileCv color='white' size={30} className='cursor-pointer hover:animate-bounce'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='sticky z-[100]'>
      <AiOutlineMenu 
        size={20}
        className='absolute top-4 right-4 z-[99] md:hidden'
        onClick={handleNav}
      />
      {nav ? (
        <div className='relative w-full h-screen bg-white flex flex-col justify-center items-center z-20 '>
          <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}/>
            <span className='pl-4'>Home</span>
          </a>
          <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsPerson size={20} />
            <span className='pl-4'>About</span>
          </a>
          <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GiSkills size={20} />
            <span className='pl-4'>Tech Stack</span>
          </a>
          <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineHome size={20}/>
          </a>
          <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-100'>
            <BsPerson size={20}/>
          </a>
          <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-100'>
            <GiSkills size={20}/>
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineProject size={20}/>
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor:pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
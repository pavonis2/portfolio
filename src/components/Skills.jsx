import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';
import Sass from '../assets/sass.png'
import Redux from '../assets/redux.png'
import Firebase from "../assets/firebase.png"
import RESTAPI from "../assets/restApi.webp"

const Skills = () => {
  return (
    <div id='skills' name='skills' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4 font-bold text-green-500'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={HTML} alt="HTML icon" />
                  <p>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={CSS} alt="CSS icon" />
                  <p>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={JavaScript} alt="JS icon" />
                  <p>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={ReactImg} alt="REACT icon" />
                  <p>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={Redux} alt="REDUX icon" />
                  <p>Redux</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={Sass} alt="SASS icon" />
                  <p>SASS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={Tailwind} alt="TAILWIND icon" />
                  <p>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={Firebase} alt="Firebase icon" />
                  <p>Firebase</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-7' src={RESTAPI} alt="Firebase icon" />
                  <p>REST API</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-4' src={Git} alt="GIT icon" />
                  <p>Git</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
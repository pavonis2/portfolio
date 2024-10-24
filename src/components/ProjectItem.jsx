import React from 'react'

const ProjectItem = ({img, title, liveDemo, sourceCode, techStack}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
        <div className='flex gap-2'>
          <a href={liveDemo} target='_blank'>
            <p className='text-center p-3 rounded-lg bg-white hover:bg-black text-gray-700 hover:text-white font-bold cursor-pointer text-md'>Live demo</p>
          </a>
          <a href={sourceCode} target='_blank' >
            <p className='text-center p-3 rounded-lg bg-white hover:bg-black text-gray-700 hover:text-white font-bold cursor-pointer text-md'>Source Code</p>
          </a>
        </div>
          </div>
    </div>
  )
}

export default ProjectItem
import React, { useState } from 'react'
import ProjectItem from './ProjectItem'
import portfolio from '../assets/portfolio.png'
import spotifyImg from '../assets/ecommerce.png'
import chatAppImg from '../assets/chatapp.png'

const Projects = () => {
  const [liveDemo, setLiveDemo] = useState(["https://chat-e0854.firebaseapp.com", "https://ecommerce-frontend-navy-zeta.vercel.app/", "https://portfolio-neon-kappa-68.vercel.app/"]);
  const [sourceCode, setSourceCode] = useState(["https://github.com/pavonis2/test-chat-app", "https://github.com/pavonis2/ecommerce-frontend", "https://github.com/pavonis2/portfolio"]);
  const [techStack, setTechStack] = useState(["REACTJS, FIREBASE, SASS", "REACTJS, STRAPI, SASS, REDUX", "REACTJS, TAILWIND CSS, GETFORM"])
  return (
    <div id='projects' className='max-w-[800px] m=auto m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-8 text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <div className='grid gap-14'>
        <ProjectItem img={chatAppImg} liveDemo={liveDemo[0]} sourceCode={sourceCode[0]} techStack={techStack[0]} title='Chat App'/>
        <ProjectItem img={spotifyImg} liveDemo={liveDemo[1]} sourceCode={sourceCode[1]} techStack={techStack[1]} title='FashionHub App'/>
        <ProjectItem img={portfolio} liveDemo={liveDemo[2]} sourceCode={sourceCode[2]} techStack={techStack[2]} title='Portfolio'/>
      </div>
    </div>
  )
}

export default Projects
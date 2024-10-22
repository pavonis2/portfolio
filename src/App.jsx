import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      {/* <Work /> */}
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  )
}

export default App

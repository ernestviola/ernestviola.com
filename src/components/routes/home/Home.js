import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import About from './About';


import './styles/Home.css'




const Home = () => {
  return (
    <div>
      <div className='page'>

        <About />
        <h1>Projects</h1>
        <h1>Contact</h1>
            
              <h1>About Me</h1>
              <p>First of all, welcome to my website! I am an aspiring <b>software engineer</b> and an aspiring old person, by that I really mean an aspiring <b>storyteller</b>. I hope that with this blog I can showcase some of my <Link to='/projects'>projects</Link> as well as add a bit of personality to some of the things I experience in life.</p>
              
              <p>My dad, also named Ernest, always said to leave a place better than how you found it. That's my goal in life, to make an impact on the world around me and to be a positive influence.</p>

              <p>I will be making a <Link to='/blogs'>blog</Link> soon and hopefully my writing won't be that atrocious. I never got an A in writing class but who cares.</p>
          </div>


    </div>

  )
}

export default Home
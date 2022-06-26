import '../../styles/Home.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import deathValley from '../../images/deathValley.jpg';
import deathValleySmall from '../../images/deathValleySmall.jpg';


const Home = () => {
  const [src, setSrc] = useState(deathValleySmall);
  const [blur, setBlur] = useState(true);

  const img = new Image()

  img.src = deathValley;
  
  img.onload = () => {
    setBlur(false)
    setSrc(deathValley);
  };

  // style={{backgroundImage: `url(${deathValley})`}}
  return (
    <div>
      <div className='intro' >
        <img
        src={src}
        style={{
          filter: blur ? "blur(50px)" : "none",
          transition: blur ? "none" : "filter 0.5s ease-out"
        }}
        alt='Ernest doing a handstand in death valley, CA'
        />
        <div className='introContent'>
          <h1 className='desktop'>If I were to describe myself in one word, that word would be, Storyteller.</h1>
          <h1 className='mobile'>A Storyteller.</h1>
        </div>
      </div>
      <div className='page'>
            
              <h1>About Me</h1>
              <p>First of all, welcome to my website! I am an aspiring <b>software engineer</b> and an aspiring old person, by that I really mean an aspiring <b>storyteller</b>. I hope that with this blog I can showcase some of my <Link to='/projects'>projects</Link> as well as add a bit of personality to some of the things I experience in life.</p>
              
              <p>My dad, also named Ernest, always said to leave a place better than how you found it. That's my goal in life, to make an impact on the world around me and to be a positive influence.</p>

              <p>I will be making a <Link to='/blogs'>blog</Link> soon and hopefully my writing won't be that atrocies. I never got an A in writing class but who cares.</p>
          </div>

    </div>

  )
}

export default Home
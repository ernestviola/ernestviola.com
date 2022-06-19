import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useProgressiveImg from './useProgressiveImg';

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
        />
        <span>I like to travel</span>
      </div>
      <div className='page'>
            
              <h1>About Me</h1>
              <p>First of all, welcome to my website. If you want to see some of my projects go ahead and click on <Link to='/projects'>projects</Link>.</p>
              
              <p>Some things I enjoy are playing guitar, traveling, and learning about people. I hope that in the future I can have a positive impact on the world, either through lifting up a community or through the environment conservation and I believe I could do this by working on my computer science and programming skills</p>

              <h3>About this website</h3>
              <p>I've designed a personal website many times over the years, and they generally don't come out to what I expect them to be. The biggest hurdle for me is trying to overengineer the heck out of it. So this time, I'm keeping it simple and will add things as I go! </p>
              
              <p>The frontend here is running on react and the backend is node which is interfacing with the frontend via API.</p>    
              
              <p>The <Link to='/blogs'>blog</Link> isn't setup yet... but will be eventually. </p>
          </div>

    </div>

  )
}

export default Home
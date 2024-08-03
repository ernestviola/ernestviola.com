import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../../styles/Home.css'

// import deathValley from '../../../images/deathValley.jpg';
// import deathValleySmall from '../../../images/deathValleySmall.jpg';


const Home = () => {
  // const [src, setSrc] = useState(deathValleySmall);
  // const [blur, setBlur] = useState(true);

  // const img = new Image()

  // img.src = deathValley;

  // img.onload = () => {
  //   setBlur(false)
  //   setSrc(deathValley);
  // };

  // style={{backgroundImage: `url(${deathValley})`}}
  return (
    <div className='construction'>
      <h1>This website is under construction</h1> 
      <span class="material-symbols-outlined">
        construction
      </span>
      <h3>Be back soon ;)</h3>
    </div>

  )
}

export default Home
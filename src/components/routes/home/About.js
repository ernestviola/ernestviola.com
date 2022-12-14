import React from 'react'

import ImageLoader from '../../customComponents/imageLoader/ImageLoader';


import deathValley from '../../../images/deathValley.jpg';
import deathValleySmall from '../../../images/deathValleySmall.jpg';
import './styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <h1 style={{margin:'0px'}}>About</h1>
      <div style={{clear:'right'}}>
        <p>Growing up, I was always observing and asking questions about the world and my environment., but the question that has been on my mind as of lately is <span style={{ fontWeight: 'bold', fontSize: '25px' }}>"What can I do in my power do to make the world a better place?"</span> I really believe that my skills with tech and my grit towards doing the impossible is what makes me standout.</p>
        <p>So if you have a social, environmental, or a project that you believe will make the world a better place to live in, then please reach out to me.</p>
        <div style={{float:'left'}}>
        <ImageLoader small={deathValleySmall} large={deathValley}/>
        </div>
      </div>
    </div>
  )
}

export default About
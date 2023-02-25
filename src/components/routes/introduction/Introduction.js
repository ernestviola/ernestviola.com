import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Introduction.css'

const Introduction = () => {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  // const [introText,setIntroText] = useState(loop[0])

  const click = () => {
    setVisible(false)



    setTimeout(() => {
      setCount(count + 1)
      setTimeout(() => {
        setVisible(true)
      }, 30)
    }, 1000)
  }

  useEffect(() => {
    const onPageLoad = () => {
      setVisible(true);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  console.log(count)

  return (
    <div className='box'>
      <div className='scene-container' >
        {
          count == 0 &&
          <div className={`scene scene-1 ${visible ? 'fadeIn' : 'fadeOut'}`}>
            <h1>Hi, I'm Ernest 👋</h1>
            <button onClick={click} className='answer'>Hi</button>
          </div>

        }
        {
          count == 1 &&
          <div className={`scene scene-1 ${visible ? 'fadeIn' : 'fadeOut'}`}>
            <h1>I'm a software engineer</h1>
            <button onClick={click} className='answer'>What have you worked on?</button>
          </div>

        }
        {
          count == 2 &&
          <div className={`scene scene-1 ${visible ? 'fadeIn' : 'fadeOut'}`}>
            <h1>My goal is to work on environmental or social projects. If you want to work together reach out!</h1>
            <Link to='/home'>
              <button>See more.</button>
            </Link>
          </div>

        }
      </div>
    </div>
  )
}

export default Introduction
import React, { Fragment, useState, useEffect } from 'react'

import SimpleContentContainer from '../../customComponents/contentContainers/SimpleContentContainer';
import Carousel, { CarouselItem } from '../../customComponents/carousel/Carousel'

import Contact from './Contact';

import './Home.css'
const Home = () => {

  const [count, setCount] = useState(3)
  const [visible, setVisible] = useState(false)
  // const [introText,setIntroText] = useState(loop[0])

  const click = () => {
    setVisible(false)



    setTimeout(() => {
      setCount(count + 1)
      setTimeout(() => {
        setVisible(true)
      }, 30)
    }, 700)
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

  return (
    <div>

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
            <button onClick={click} className='answer'>See more.</button>
          </div>

        }
        { 
          count == 3 && <div className={`${visible ? 'fadeIn' : 'fadeOut'}`}>

            <Contact />
            <SimpleContentContainer title='About' content={
              <Fragment>
                <p>Software engineering only came later in life and has always been a tool to reach my goals. What I'm truly passionate about are social and environmental projects that bring a net positive impact to people around me. If you have something you're interested in working on don't hestitate to <a href='#contact'>contact me</a>.</p>
              </Fragment>}
            />

            <h1 style={{textAlign:'center'}}>What's new?</h1>

            <SimpleContentContainer title="Hi I'm Working on _blank_" content={
              <Fragment>
                <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                  <Carousel >
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                  </Carousel >
                </div>

              </Fragment>}
            />
          </div>
        }
      </div>

    </div>

  )
}

export default Home
import React, { Fragment, useState } from 'react'

import SimpleContentContainer from '../../customComponents/contentContainers/SimpleContentContainer';
import Carousel, {CarouselItem} from '../../customComponents/carousel/Carousel'

import './styles/Home.css'




const Home = () => {
  return (
    <div>
      <div className='page'>
        <SimpleContentContainer title='About' content={
          <Fragment>
            <p>Software engineering only came later in life and has always been a tool to reach my goals. What I'm truly passionate about are social and environmental projects that bring a net positive impact to people around me. If you have something you're interested in working on don't hestitate to <a href='#contact'>contact me</a>.</p>
          </Fragment>}
        />
        <SimpleContentContainer title="Hi I'm Working on _blank_" content={
          <Fragment>
            <div style={{display:'flex', flexWrap:'nowrap'}}>
              <Carousel > 
                <CarouselItem>Item 1</CarouselItem>  
                <CarouselItem>Item 2</CarouselItem>  
                <CarouselItem>Item 3</CarouselItem>  
              </Carousel >
            </div>
            
          </Fragment>} 
        />

        
         {/* < Project /> */}
      </div>


    </div>

  )
}

export default Home
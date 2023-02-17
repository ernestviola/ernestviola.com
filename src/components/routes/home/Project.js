import React from 'react'

import './styles/Project.css'

import Carousel, {CarouselItem} from '../../customComponents/carousel/Carousel'

const Project = () => {
  return (
    <div className='projectcontainer'>
        <h1>Projects</h1>
        <div style={{display:'flex', flexWrap:'nowrap'}}>
          <Carousel > 
            <CarouselItem>Item 1</CarouselItem>  
            <CarouselItem>Item 2</CarouselItem>  
            <CarouselItem>Item 3</CarouselItem>  
          </Carousel >
        </div>



        
    </div>
  )
}

export default Project
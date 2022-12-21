import React from 'react'

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

const CarouselItem = ({children,width}) => {
  return (
    <div className='carousel-item' style={{width}}>
      {children}
    </div>
  )
}

const Carousel = ({children}) => {
  return (
    <div className='carousel'>
      <div className='inner' style={{transform: "translateX(-0%)"}}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: "100%"})
        })}

      </div>  
    </div>
  )
}

export default Carousel
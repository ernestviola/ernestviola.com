import React from 'react'
import './SimpleContentContainer.css'

const SimpleContentContainer = (props) => {
  return (
    <div className='simpleContentContainer' style={{ margin: '20px', boxShadow:'5px 5px 50px 5px grey'}}>
      <h1 style={{ margin: '0px' }}>{props.title}</h1>
      <div>
        {props.content}
      </div>
    </div>
  )
}

export default SimpleContentContainer
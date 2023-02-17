import React from 'react'
import './SimpleContentContainer.css'

const SimpleContentContainer = (props) => {
  return (
    <div className='simpleContentContainer'>
      <h1 style={{ margin: '0px' }}>{props.title}</h1>
      <div>
        {props.content}
      </div>
    </div>
  )
}

export default SimpleContentContainer
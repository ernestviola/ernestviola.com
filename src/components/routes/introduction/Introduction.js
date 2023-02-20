import React, { useState } from 'react'

import './Introduction.css'

const Introduction = () => {
  const introductionLoop = [
    `Hi, I'm Ernest.`,
    `I'm a software engineer.`
  ]
  const [count, setCount] = useState(0)
  // const [introText,setIntroText] = useState(loop[0])

  const click = () => {
    setCount(count + 1)
  }

  return (
    <div className='box'>
      <div className='introduction'>
        <h1 className='question'>{introductionLoop[count % introductionLoop.length]}</h1>
        <button onClick={click} className='answer'>Hi</button>
      </div>
    </div>
  )
}

export default Introduction
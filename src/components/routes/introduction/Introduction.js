import React, { useState } from 'react'

import './Introduction.css'

const Introduction = () => {
  const introductionLoop = [
    `Hi, I'm Ernest.`,
    `I'm a software engineer.`
  ]
  const answerLoop = [
    `Hi 👋`,
    'What have you worked on?'
  ]
  const [count, setCount] = useState(0)
  const [visible,setVisible] = useState(1)
  // const [introText,setIntroText] = useState(loop[0])

  const click = () => {
    setVisible(0)
    
    

    setTimeout(() => {
      setCount(count + 1)
      setVisible(1)
    },500)
  }

  return (
    <div className='box'>
      <div className={visible?'fadeIn introduction':'fadeOut introduction'}>
        <h1 className='question'>{introductionLoop[count % introductionLoop.length]}</h1>
        <button onClick={click} className='answer'>{answerLoop[count % introductionLoop.length]}</button>
      </div>
    </div>
  )
}

export default Introduction
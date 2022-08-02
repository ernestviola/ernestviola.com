import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import CustomEditor from '../CustomEditor';


import '@aws-amplify/ui-react/styles.css';
import '../../styles/blog/Create.css'

const Create = ({ signOut, user }) => {

  const [contentState, setContentState] = useState('')
  const [title, setTitle] = useState('')

  const onChange = (data) => {
    setContentState(data)
    console.log(contentState)
  }

  const handleSubmit = async (e) => {
    const contentText = JSON.stringify(contentState)
    const date = new Date().getTime()
    e.preventDefault()

    let uuid = uuidv4();

    const res = await API.post('blogsApi', '/blogs', {
      body: {
        uuid,
        title,
        content: contentText,
        added_at: date,
        updated_at: date
      }
    })

    console.log(res)

  }



  return (
    <div className='page'>
      <h1>Create a blog</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <CustomEditor onChange={onChange} />
      <Button onClick={handleSubmit}>Publish</Button>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  )
}

export default withAuthenticator(Create)
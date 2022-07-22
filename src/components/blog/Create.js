import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import {API} from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../../styles/blog/Create.css'

const Create = ({ signOut, user }) => {

  const [markdown,setMarkdown] = useState('')
  const [title,setTitle] = useState('')

  const handleSubmit = (e) => {
    const date = new Date().getTime()
    e.preventDefault()

    let uuid = uuidv4();

    API.post('blogsApi','/blogs', {
        body : {
            uuid,
            title,
            content : markdown,
            added_at: date,
            updated_at: date
        }
    })
    .then(blogRes => console.log(blogRes))

}



  return (
    <div className='page'>
        <h1>Create a blog</h1>
        <div className='title' placeholder='Title' contentEditable='true' value={title} onInput={(e) => setTitle(e.currentTarget.textContent)}></div>
        <div className='blogPreview'>
          
          <div className='markdown' contentEditable='true' value={markdown} onInput={(e) => setMarkdown(e.currentTarget.textContent)}></div>
          {/* <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
            
          </textarea> */}
          <ReactMarkdown children={markdown} className='markdownPreview'></ReactMarkdown>
        </div>

        <button onClick={handleSubmit}>Create</button>
        <Button onClick={signOut}>Sign out</Button>
    </div>
  )
}

export default withAuthenticator(Create)
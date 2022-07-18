import React, { useEffect, useState } from 'react'
import {API, Auth} from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const Test = ({ signOut, user }) => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [blogs,setBlogs] = useState([])


    useEffect(() => {
        API.get('blogsApi','/blogs/uuid')
        .then(blogRes => console.log(blogRes))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        let uuid = uuidv4();

        API.post('blogsApi','/blogs', {
            body : {
                uuid,
                title,
                content
            }
        })
        .then(blogRes => console.log(blogRes))

    }
  return (
    <div className='page'>
        <header>Test</header>

        <form onSubmit={handleSubmit}>
            Title<input value={title} onChange={(e) => setTitle(e.target.value)} />
            <br/>
            Content<input value={content} onChange={(e) => setContent(e.target.value)} />
            <button>Create</button>
        </form>

        <Button onClick={signOut}>Sign out</Button>

    </div>
  )
}

export default withAuthenticator(Test)
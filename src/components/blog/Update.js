import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { API } from 'aws-amplify';

import { withAuthenticator, Button } from '@aws-amplify/ui-react';

import { useParams } from 'react-router-dom';

import CustomEditor from '../CustomEditor';


import '@aws-amplify/ui-react/styles.css';
import '../../styles/blog/Create.css'

const Update = ({ signOut, user }) => {
    const [contentState, setContentState] = useState('')
    let { uuid } = useParams()

    const onChange = (data) => {
        setContentState(data)
        console.log(contentState)
    }

    const handleSubmit = async () => {
        const contentText = JSON.stringify(contentState)
        const date = new Date().getTime()

        const resData = await API.put('blogsApi', '/blogs', {
            body: {
                uuid,
                updated_at: date
            }
        })

        console.log(resData)
    }

    // useEffect(() => {
    //     getBlog()
    // },[])



    return (
        <div className='page'>
            <h1>Create a blog</h1>
            <CustomEditor onChange={onChange}/>
            
            <Button onClick={signOut}>Sign out</Button>
        </div>
    )
}

export default withAuthenticator(Update)
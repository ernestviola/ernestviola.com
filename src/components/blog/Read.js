import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { Auth } from 'aws-amplify';
import { Button } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';

import { API } from 'aws-amplify';
import CustomEditor from '../CustomEditor';



const Read = ({ signOut, user }) => {
  const [contentState, setContentState] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
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
        content: contentText,
        updated_at: date
      }
    })

    console.log(resData)
  }

  const fetchBlog = async () => {

    const resData = await API.get('blogsApi', '/blogs/object/' + uuid)
    setContentState(JSON.parse(resData.content))
    setIsLoading(false)
  }

  const checkAuthenticated = async () => {
    try {
      await Auth.currentAuthenticatedUser
      return true
    } catch {
      return false
    }
  }

  useEffect(() => {
    fetchBlog()
    setIsAuthenticated(checkAuthenticated())
  }, []);


  return (
    (isLoading ?
      <>Loding...</> :
      <div className='page'>
        <CustomEditor readOnly={true} contentState={contentState} onChange={onChange} />
        {isAuthenticated ?
          <>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={signOut}>Sign out</Button>
          </>
          :
          <></>
        }
      </div>
    )
  )
}

export default Read
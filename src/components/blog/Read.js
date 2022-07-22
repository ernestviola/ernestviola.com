import React, {useState,useEffect} from 'react'


import { useParams } from 'react-router-dom';

import {API} from 'aws-amplify';
import ReactMarkdown from 'react-markdown'

const Read = () => {

    const [blog, setBlog] = useState('')
    let {uuid} = useParams()
    // const uuid = this.props.match.params.uuid

    const fetchBlog = async () => {

        const resData = await API.get('blogsApi','/blogs/object/'+ uuid)
        setBlog(resData)

    }
        
    useEffect(() => {
        fetchBlog()
    }, []);


  return (
    <div className='page'>
        <h1>{blog.title}</h1>
        <ReactMarkdown>
            {blog.content}
        </ReactMarkdown>
    </div>
  )
}

export default Read
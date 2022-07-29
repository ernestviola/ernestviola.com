import React, {useState,useEffect} from 'react'


import { useParams } from 'react-router-dom';

import {API} from 'aws-amplify';
import CustomEditor from '../CustomEditor';

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
        <CustomEditor readOnly={true} />
    </div>
  )
}

export default Read
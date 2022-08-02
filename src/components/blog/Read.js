import React, { useState, useEffect } from 'react'


import { useParams } from 'react-router-dom';

import { API } from 'aws-amplify';
import CustomEditor from '../CustomEditor';

const Read = () => {

  const [blog, setBlog] = useState('')
  const [contentState, setContentState] = useState('')
  const [loading, setLoading] = useState(true)
  let { uuid } = useParams()
  // const uuid = this.props.match.params.uuid

  // const onChange = (data) => {
  //   setContentState(data)
  //   console.log(contentState)
  // }

  const fetchBlog = async () => {

    const resData = await API.get('blogsApi', '/blogs/object/' + uuid)
    setBlog(resData)
    // setContentState(JSON.parse(blog.content))
    setLoading(false)
    console.log(resData)
    console.log(JSON.parse(resData.content))
    setContentState(JSON.parse(resData.content))
  }

  useEffect(() => {
    fetchBlog()
  }, []);


  return (
    (loading ?
      <>Loding...</> :
      <div className='page'>
        <CustomEditor readOnly={true} contentState={contentState} />
      </div>
      )
    // <div className='page'>
    //   <CustomEditor readOnly={true} contentState={JSON.parse('{"blocks":[{"key":"emgul","text":"Here is some test content for my blog. This is bold. This is italic. This is underline.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":47,"length":4,"style":"BOLD"},{"offset":61,"length":6,"style":"ITALIC"},{"offset":77,"length":9,"style":"UNDERLINE"}],"entityRanges":[],"data":{}}],"entityMap":{}}')}/>
    // </div>
  )
}

export default Read
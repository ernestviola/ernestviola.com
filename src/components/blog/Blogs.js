import React, {useState,useEffect} from 'react';

import {API, Auth} from 'aws-amplify';
import axios from "axios";

import Lists from '../List';
import SearchBar from '../SearchBar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
      const resData = await API.get('blogsApi','/blogs/uuid')
      setBlogs(resData)
    }
     
    useEffect(() => {
      fetchBlogs()
    }, []);
   
    return (
        <div className="page">
            <h1>Blogs</h1>
            <ul>
              {blogs.map(blog => 
                <li key= {blog.uuid}>
                  {blog.title}
                  {blog.content}
                </li>
              )}
            </ul>
        </div>
    );
}

export default Blogs
import React, { useState, useEffect } from 'react';

import { API, Auth } from 'aws-amplify';
import axios from "axios";

import { Link } from 'react-router-dom';
import Lists from '../List';
import SearchBar from '../SearchBar';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchBlogs = async () => {
    const resData = await API.get('blogsApi', '/blogs/uuid')
    setBlogs(resData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    (isLoading ? <>Loading...</> :
      <div className="page">
        <h1>Blogs</h1>
        <ul>
          {blogs.map(blog =>
            <li key={blog.uuid}>
              <Link to={`/blog/${blog.uuid}`}>{blog.title}</Link>
            </li>
          )}
        </ul>
      </div>
    )

  );
}

export default Blogs
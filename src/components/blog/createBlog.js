import React from 'react'
import {API, Auth} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react';


const createBlog = () => {
  return (
    <div>
        <h1>Create a blog</h1>
        <form>
            
        </form>


    </div>
  )
}

export default withAuthenticator(createBlog)
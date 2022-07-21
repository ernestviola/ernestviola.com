import React from 'react'
import {API, Auth} from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Create = ({ signOut, user }) => {

  async function callApi() {
    const token = user.signInUserSession.accessToken.jwtToken
    console.log(token)

    let uuid = uuidv4();
    console.log('uuid:')
    console.log(uuid)

    const data = await API.get('blogsApi','/blogs/uuid/uuid2',{})
    


    console.log(data)


  }
  return (
    <div className='page'>
        <h1>Create a blog</h1>
        <form>
          <textarea></textarea>
        </form>
        <button onClick={callApi}>Create</button>

        <Button onClick={signOut}>Sign out</Button>


    </div>
  )
}

export default withAuthenticator(Create)
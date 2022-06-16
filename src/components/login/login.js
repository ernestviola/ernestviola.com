import React from 'react'
import {API, Auth} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react';

const login = () => {
    async function callApi() {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.accessToken.jwtToken

        // .signInUserSession.idToken.jwtToken

        console.log(token)

        const requestInfo = {
            headers: {
                Authorization: token
            }
        }

        const data = await API.get('ernestviolaBlog','/blog',requestInfo)
        console.log({data})
    }
    
  return (

    <div>You're logged in!</div>
    
  )
}

export default withAuthenticator(login)
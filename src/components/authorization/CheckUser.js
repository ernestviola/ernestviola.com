import React from 'react'
import {API, Auth} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react';

const CheckUser = () => {
    async function callApi() {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.accessToken.jwtToken


        console.log(token)
    }

  return (
    <div>
        <button onClick={callApi}>Check User</button>
    </div>
  )
}

export default CheckUser
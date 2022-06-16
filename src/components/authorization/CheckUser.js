import React from 'react'
import {Auth} from 'aws-amplify';

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
import React from 'react'
import { Auth } from 'aws-amplify';

const Logout = () => {
    async function SignOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

  return (
    <div>
        <button onClick={SignOut}>Log Out</button>
    </div>
  )
}

export default Logout
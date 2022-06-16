import React, {useState} from 'react'
import { Auth } from 'aws-amplify';

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();


    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const user = await Auth.signIn(username, password);

            console.log(user);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label >Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </label>
            <label >Password:
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login
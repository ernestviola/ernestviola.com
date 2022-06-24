import React, {useState,useEffect} from 'react'
import { Auth } from 'aws-amplify';

import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    // const navigate = useNavigate()


    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const user = await Auth.signIn(username, password);
            console.log(user);
            userHasAuthenticated(true)
        } catch (error) {
            console.log('error signing in', error);
        }


    }

    useEffect(() => {
        onLoad();
      }, []);
      
    async function onLoad() {
    try {
        await Auth.currentSession();
        userHasAuthenticated(true);
    } catch (e) {
        if (e !== "No current user") {
        alert(e);
        }
    }
    
    setIsAuthenticating(false);
    }

  return (
    !isAuthenticating && (
    <div>
        {
            isAuthenticated ? (<><Navigate to='/' /></>) :
            (<form onSubmit={handleSubmit} >
                <label >Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </label>
                <label >Password:
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <input type="submit" value="Login" />
            </form>)

        }
    </div>)
  )
}

export default Login
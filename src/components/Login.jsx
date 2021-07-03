import React, { useState } from 'react'
import loginService from '../helpers/services/Users'
import regeneratorRuntime from "regenerator-runtime";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await loginService.login({
                username,
                password
            })
            console.log(user);
            setUser(user)
            setUsername('')
            setPassword('')
            console.log("Kua Kua Kua esto es un submit");
        } catch (error) {
            console.log('Amén y el error.');
            setTimeout(() => {
                console.log(null)
            }, 5000)
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    name='Username'
                    placeholder='Username'
                    onChange={({ target }) => setUsername(target.value)} />
                <input
                    type="password"
                    value={password}
                    name='Password'
                    placeholder='password'
                    onChange={({ target }) => setPassword(target.value)} />
                <button>Login</button>
            </form>


        </>
    )
}

export default Login

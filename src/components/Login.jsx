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
            const user1 = await loginService.login()
            console.log(user1.username);
            const prueba = user1.filter(usuarios => (
                usuarios.username === username && usuarios.password === password
                    ?console.log('Datos validos')
                    :console.log('Datos inválidos')
            ))
            console.log(prueba);
            console.log(user);
            setId('')
            setUser(user1)
            setPassword('')
        } catch (error) {
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
                    onChange={({ target }) => {
                        setUsername(target.value)

                    }} />

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

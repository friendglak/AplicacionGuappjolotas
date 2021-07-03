import React, { useState } from 'react'
import loginService from '../helpers/services/Users'
import regeneratorRuntime from "regenerator-runtime";
import { ContainerLogin, ContainerMain, FormLogin, H1Login, InputLogin, ButtonLogin} from '../style/LoginStyles';


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
                    ? console.log('Datos validos')
                    : console.log('Datos inválidos')
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

            <ContainerMain>
                <ContainerLogin>
                    <FormLogin onSubmit={handleLogin}>
                        <H1Login>Iniciar sesión</H1Login>
                        <InputLogin
                            type="text"
                            value={username}
                            name='Username'
                            placeholder='Usuario'
                            onChange={({ target }) => {
                                setUsername(target.value)

                            }} />
                        <InputLogin
                            type="password"
                            value={password}
                            name='Password'
                            placeholder='Contraseña'
                            onChange={({ target }) => setPassword(target.value)} />
                        <ButtonLogin>Entrar</ButtonLogin>
                    </FormLogin>
                </ContainerLogin>
            </ContainerMain>
        </>
    )
}

export default Login

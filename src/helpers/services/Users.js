import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";

const baseUrl = 'https://api-guapjolotas-2021.vercel.app/usuarios'

const login = async () => {
    const { data } = await axios.get(baseUrl)
    return data

}

export default { login }

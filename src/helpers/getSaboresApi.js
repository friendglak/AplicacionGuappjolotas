import { useState } from "react"

const getSaboresApi = () => {
    const [sabores, setSabores] = useState(null);

    const getSabores = async () => {
        const url = `https://api-guapjolotas-2021.vercel.app/sabores/`
        const res = await fetch(url);
        const data = await res.json();
        const arr = await data.map((element, i) => (element));
        setSabores(arr[0])

    }
    return {sabores, getSabores}
}

export default getSaboresApi

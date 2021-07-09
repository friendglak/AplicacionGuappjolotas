import { useState } from "react"
import { useParams } from "react-router-dom"


const getProductoId = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    
    const getProducto = async () => {
        const url = `https://api-guapjolotas-2021.vercel.app/productos/${id}`
        const res = await fetch(url);
        const data = await res.json();
        setProducto(data);
    }
    return {producto, getProducto}
}

export default getProductoId

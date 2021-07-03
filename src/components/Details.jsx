import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);


    useEffect(() => {
        const getProducto = async () =>{
            const url = `https://api-guapjolotas-2021.vercel.app/productos/${id}`
            const res = await fetch(url);
            const data = await res.json()
            setProducto(data)
        }
        getProducto()
    }, [])



    return (
        <div>
            <img src={producto.imagen} alt="" />
        </div>
    )
}

export default Details

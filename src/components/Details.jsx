import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [sabores, setSabores] = useState(null);

    useEffect(() => {
        const getProducto = async () =>{
            const url = `https://api-guapjolotas-2021.vercel.app/productos/${id}`
            const res = await fetch(url);
            const data = await res.json();
            setProducto(data);
        }
        getProducto()
        const getSabores = async () =>{
            const url = `https://api-guapjolotas-2021.vercel.app/sabores/`
            const res = await fetch(url);
            const data = await res.json();
            const arr = await data.map((element, i) => (element));
            setSabores(arr[0])

        }
        getSabores()
    }, [])

    const tipoSabor = () =>{
            if (producto.tipoSabor && sabores) {
                return producto.tipoSabor === "tamal" ? pintarSabor(sabores.tamal):
                producto.tipoSabor === "bebida" ? pintarSabor(sabores.bebida): 
                console.error("No existe le sabor");
            }
    }

    const addOpacidad = (sabor) =>{
        return producto.sabor === sabor ? {}: {opacity: 0.2}
    }

    const pintarSabor = (sabor) =>{
        return sabor.map(element =>(
            <img src={element.imagenSabor} alt={element.sabor} key={element.id} 
            style={addOpacidad(element.sabor)}></img>
        ))
    }
        


    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} />
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio} MXN</h2>
            <div>
                <h3>Sabor</h3>
                {tipoSabor()}
            </div>
            <div>
                <h3>Bebidas</h3>
            </div>
        </div>
    )
}

export default Details

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getProductos from '../helpers/getProductos';

const Details = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [sabores, setSabores] = useState(null);
    const [productos, setProductos] = useState(null);
    const [contadorProducto, setContadorProducto] = useState(0)
    const [carrito, setCarrito] = useState([])
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
        getSabores();

        const updateProductos = () => {
            getProductos()
                .then((products) => {
                    setProductos(products)
                })
        }
        updateProductos()
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
        

    const tipoCombo = () =>{
        if (producto.tipoSabor && productos) {
            return producto.tipoSabor === "tamal" ? filtrarCombo("Bebidas"):
            producto.tipoSabor === "bebida" ? filtrarCombo("Guajolotas"): 
            console.error("No existe le sabor");
        }
    }
    const filtrarCombo = (categoria) =>{
        const combo = productos.filter(element => element.categoria === categoria)
        return pintarCombo(combo)
    }
    const pintarCombo = (combo) =>{
        return (combo.map(element =>(
            <div  key={element.id}>
                <label>
                    <img src={element.imagen} alt={element.nombre} />
                    <h4>{element.nombre}</h4>
                    <h5>+${element.precio} MXN</h5>
                    <input type="checkbox"  onChange={(e)=>e.target.checked?_handleCheck(element): _handleCheck(0)}/>
                </label>
            </div>
        )))
    }


    const _handleDisminuir = () => { 
        contadorProducto <= 0? setContadorProducto(0):setContadorProducto(contadorProducto - 1);
    } 
    const _handleAumentar = () => {
        setContadorProducto(contadorProducto + 1)
    }





    const _handleCheck = (e) =>{
        e && setCarrito(...carrito, [e]);
        console.log(e)
        // const {checked} = e.target;
        // const {currentSrc} = e.target.parentElement.children[0];
        // checked && console.log(checked, currentSrc);

        console.log(carrito)
    }









    const _handleAddCarrito = () =>{
        // const productosCarrito = producto.precio * contadorProducto
        console.log("agregando al carrito", producto, contadorProducto)
    }
    return (
        <div>
            <div>
                <img src={producto.imagen} alt={producto.nombre} />
                <h1>{producto.nombre}</h1>
                <h2>${producto.precio} MXN</h2>
                <div>
                    <button onClick={_handleDisminuir}>-</button>
                    <p>{contadorProducto}</p>
                    <button onClick={_handleAumentar}>+</button>
                </div>
            </div>
            <div>
                <h3>Sabor</h3>
                {tipoSabor()}
            </div>
            <div>
                <h3>Guajolocombo</h3>
                {tipoCombo()}
            </div>
            <button onClick={_handleAddCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Details

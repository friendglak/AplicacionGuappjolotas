import { CompassCalibrationOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getProductos from '../helpers/getProductos';
import { Link } from 'react-router-dom'
import {
ContainerButtonD,
ButtonD,
ContainerDetails,
ContadorP,
DetailPrecio,
ContainerMainCombo,
ContainerCombo,
ContainerSabor,
PintarCombo,
TextoCombo,
TextoSabor,
TextoPintarCombo,
ButtonCar
}
    from '../style/DetailsStyles';

const Details = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [sabores, setSabores] = useState(null);
    const [productos, setProductos] = useState(null);
    const [contadorProducto, setContadorProducto] = useState(0);
    const [productoCheck, setProductoCheck] = useState([]);


    useEffect(() => {
        const getProducto = async () => {
            const url = `https://api-guapjolotas-2021.vercel.app/productos/${id}`
            const res = await fetch(url);
            const data = await res.json();
            setProducto(data);
        }
        getProducto()
        const getSabores = async () => {
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




    const tipoSabor = () => {
        if (producto.tipoSabor && sabores) {
            return producto.tipoSabor === "tamal" ? pintarSabor(sabores.tamal) :
                producto.tipoSabor === "bebida" ? pintarSabor(sabores.bebida) :
                    console.error("No existe el sabor");
        }
    }
    const addOpacidad = (sabor) => {
        return producto.sabor === sabor ? {} : { opacity: 0.2 }
    }
    const pintarSabor = (sabor) => {
        return sabor.map(element => (
            <img src={element.imagenSabor} alt={element.sabor} key={element.id}
                style={addOpacidad(element.sabor)}></img>
        ))
    }


    const tipoCombo = () => {
        if (producto.tipoSabor && productos) {
            return producto.tipoSabor === "tamal" ? filtrarCombo("Bebidas") :
                producto.tipoSabor === "bebida" ? filtrarCombo("Guajolotas") :
                    console.error("No existe el sabor");
        }
    }
    const filtrarCombo = (categoria) => {
        const combo = productos.filter(element => element.categoria === categoria)
        return pintarCombo(combo)
    }
    const pintarCombo = (combo) => {
        return (combo.map(element => (
            <PintarCombo key={element.id}>
                <label>
                    <img src={element.imagen} alt={element.nombre} />
                    <TextoPintarCombo>{element.nombre}</TextoPintarCombo>
                    <h5>+${element.precio} MXN</h5>
                    <input type="checkbox" onChange={(e) => e.target.checked ? _handleCheck(element) : _handleRemoveCheck(element)} />
                </label>
            </PintarCombo >
        )))
    }


    const _handleDisminuir = () => {
        contadorProducto <= 0 ? setContadorProducto(0) : setContadorProducto(contadorProducto - 1);
    }
    const _handleAumentar = () => {
        setContadorProducto(contadorProducto + 1)
    }




    // Arreglar el checkbox que me deje subir varios combos
    const _handleCheck = (element) => {
        setProductoCheck([
            ...productoCheck,
            element
        ])

    }
    const _handleRemoveCheck = (element) => {
        const removeCheck = productoCheck.filter(ele => ele !== element);
        setProductoCheck(removeCheck)
    }



    const _handleAddCarrito = () => {
        //sube los productos del combo
        const comboCheck = [...new Set(productoCheck)];


        localStorage.setItem("Producto", JSON.stringify(producto));
        localStorage.setItem("Cantidad Producto", JSON.stringify(contadorProducto));
        localStorage.setItem("Combo", JSON.stringify(comboCheck));
    }

    return (
        <ContainerDetails>
            <>
                <img src={producto.imagen} alt={producto.nombre} />
                <h1>{producto.nombre}</h1>
                <DetailPrecio>${producto.precio} MXN</DetailPrecio>
                <ContainerButtonD>
                    <ButtonD onClick={_handleDisminuir}>-</ButtonD>
                    <ContadorP>{contadorProducto}</ContadorP>
                    <ButtonD onClick={_handleAumentar}>+</ButtonD>
                </ContainerButtonD>
            </>
            <ContainerSabor>
                <TextoSabor>Sabor</TextoSabor>
                <div>{tipoSabor()}</div>
            </ContainerSabor>
            <ContainerMainCombo>
                <TextoCombo>Guajolocombo</TextoCombo>
                <ContainerCombo> {tipoCombo()}</ContainerCombo>
            </ContainerMainCombo>
            <Link to='/carrito'>
                <ButtonCar onClick={_handleAddCarrito}>Agregar {contadorProducto} al carrito</ButtonCar>
            </Link>
        </ContainerDetails>
    )
}

export default Details

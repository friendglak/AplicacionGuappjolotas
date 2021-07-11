import { CompassCalibrationOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useState } from 'react';
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
import getProductoId from '../helpers/getProductoId';
import getSaboresApi from '../helpers/getSaboresApi';
import getProductos from '../helpers/getProductos';
import CantidadProducto from '../hooks/CantidadProducto';
import ComboCheck from '../hooks/ComboCheck';



const Details = () => {

    const {producto, getProducto} = getProductoId();
    const {sabores, getSabores} = getSaboresApi();
    const {contadorProducto, _handleAumentar, _handleDisminuir} = CantidadProducto();
    const {productoCheck, _handleCheck, _handleRemoveCheck} = ComboCheck();
    const [productos, setProductos] = useState(null);



    useEffect(() => {
        getProducto()
        getSabores();
// Obtiene de la api los productos que iran en Guajocombo
        const updateProductos = () => {
            getProductos()
                .then((products) => {
                    setProductos(products)
                })
        }
        updateProductos()
    }, [])



//definiendo el Sabor del producto
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
// 
//Definiendo el Combo segun la informacion de la API
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
//
// Subiendo A localStorage
    const _handleAddCarrito = () => {
        //sube los productos del combo
        const comboCheck = [...new Set(productoCheck)];

        const productoPrincipal =
           {
                nombre: producto.nombre,
                id: producto.id,
                precio : producto.precio,
                imagen: producto.imagen,
                cantidad: contadorProducto,
            };
        const carrito = comboCheck;
        
        productoPrincipal.cantidad > 0? comboCheck.unshift(productoPrincipal): null;
                // {comboCheck}
        

        localStorage.setItem("Carrito", JSON.stringify(carrito));


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

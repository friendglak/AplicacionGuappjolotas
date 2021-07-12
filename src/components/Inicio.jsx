import React, { useEffect } from 'react'
import {
    FormButton,
    ContainerMain,
    InicioHeading,
    DivPadre,
    DivHijo,
    DivImg,
    DivInfo,
    H2Info,
    H2Price,
    DetailsLink
} from '../style/InicioStyles'
import getProductos from '../helpers/getProductos.js'
import { useState } from 'react'
import NavCategoria from '../hooks/NavCategoria'
import SearchProducto from '../hooks/SearchProducto'


const Inicio = () => {
    const [productos, setProductos] = useState([])
    const [productosCategoria, setProductosCategoria] = useState([])

    const updateProductos = () => {
        getProductos()
            .then((products) => {
                setProductos(products);
                //Sube info a producttosCateogria (categoria "Guajolotas")
                const guajolota =  products.filter(ele => ele.categoria === "Guajolotas");
                setProductosCategoria(guajolota);
            })
    }
    useEffect(() => {
        updateProductos()


    }, [])

    return (
        <>

            <ContainerMain>
                <InicioHeading>
                    Nada como una Guajolota para empezar el día.
                </InicioHeading>
                <SearchProducto/>
                {/* Agregar nav categoria */}
                <NavCategoria productos={productos} setProductosCategoria={setProductosCategoria}/>
                <DivPadre >
                    {
                        productosCategoria.map((element) => (
                            <DetailsLink to={`/detalles/${element.id}`} key={element.id}>
                                <DivHijo  >
                                    <DivImg style={{ backgroundImage: `url(${element.imagen})` }} />
                                    <DivInfo >
                                        <H2Info>{element.nombre}</H2Info>
                                        <H2Price>${element.precio} MXN </H2Price>
                                    </DivInfo>
                                </DivHijo>
                            </DetailsLink>
                        ))
                    }
                </DivPadre>
            </ContainerMain>
        </>
    )
}

export default Inicio

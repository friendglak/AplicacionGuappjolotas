import React, { useEffect } from 'react'
import {
    Form,
    FormInput,
    FormButton,
    ContainerMain,
    InicioHeading,
    DivPadre,
    DivHijo,
    DivImg,
    DivInfo,
    H2Info,
    H2Price
} from '../style/InicioStyles'
import getProductos from '../helpers/getProductos.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Inicio = () => {
    const [productos, setProductos] = useState([])


    const updateProductos = () => {
        getProductos()
            .then((products) => {
                setProductos(products)
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
                <Form>
                    <FormInput id="search" type="search" name="" required placeholder="Sabor de guajalota, bebida...">

                    </FormInput>
                </Form>
                <DivPadre>
                    {

                        productos.map((element) => (
                            <Link>
                                <DivHijo to="/detalles" key={element.id}>
                                    <DivImg style={{ backgroundImage: `url(${element.imagen})` }} />
                                    <DivInfo >
                                        <H2Info>{element.nombre}</H2Info>
                                        <H2Price>${element.precio} MXN </H2Price>
                                    </DivInfo>
                                </DivHijo>
                            </Link>
                        ))
                    }
                </DivPadre>
            </ContainerMain>
        </>
    )
}

export default Inicio

import React from 'react'

const NavCategoria = ({productos, setProductosCategoria}) => {
    const _handleCategoria = (e) => {
        const categoria = productos.filter(ele => ele.categoria === e.target.innerText);
        setProductosCategoria(categoria)
    }
    return (
        <nav>
            <button onClick={_handleCategoria}>Guajolotas</button>
            <button onClick={_handleCategoria}>Bebidas</button>
            <button onClick={_handleCategoria}>Tamales</button>
        </nav>
    )
}

export default NavCategoria

import { useState } from "react"


const CantidadProducto = () => {
    const [contadorProducto, setContadorProducto] = useState(0);

    const _handleDisminuir = () => {
        contadorProducto <= 0 ? setContadorProducto(0) : setContadorProducto(contadorProducto - 1);
    }
    const _handleAumentar = () => {
        setContadorProducto(contadorProducto + 1)
    }
    return {contadorProducto, _handleAumentar, _handleDisminuir}
}

export default CantidadProducto

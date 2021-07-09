import {useState} from 'react'

const ComboCheck = () => {
    const [productoCheck, setProductoCheck] = useState([]);
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
    return {productoCheck, _handleCheck, _handleRemoveCheck}
}

export default ComboCheck

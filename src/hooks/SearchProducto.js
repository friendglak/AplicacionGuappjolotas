import React,{useState} from 'react'
import {
    FormInput,
    Form

} from '../style/InicioStyles'


const SearchProducto = ({productos}) => {
    const [textSearch, setTextSearch] = useState("");
    const [search, setSearch] = useState("");
    console.log(textSearch)


    const _handleSearch = () =>{
        setSearch(textSearch)
    };
    const filtroBusqueda = productos.filter(ele =>(
        ele.nombre.toLowerCase().includes(search.toLowerCase())
    ));
    console.log(filtroBusqueda)
    return (
        <Form onSubmit={(e)=>{ e.preventDefault(); _handleSearch()}}>
            <FormInput 
            id="search" 
            type="search" 
            value={textSearch} required 
            placeholder="Sabor de guajalota, bebida..."
            onChange={(e)=>{
                setTextSearch(e.target.value)
            }}
            >
            </FormInput>
        </Form>
    )
}

export default React.memo(SearchProducto)

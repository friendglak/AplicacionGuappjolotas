import regeneratorRuntime from "regenerator-runtime";

const getProductos = async() => {
    const url = "https://api-guapjolotas-2021.vercel.app/productos";
    const resp = await fetch(url);
    const products = await resp.json();

    return products
}

export default getProductos

import React, {useState, useEffect} from "react"
import CardDetail from '../CardDetail/CardDetail.js'
import ListaProductos from "../../MockProductos.js"
import { useParams } from "react-router-dom";

export default function CardDetailConteiner(){
    const { id } = useParams()
    const [productoFind, setProductoFind] = useState({})

    useEffect( () => {
        findProductByID()
    }, [id]);

    const findProductByID = () => {
        return ListaProductos.map( (producto) => {
            if(producto.id == id){
                return setProductoFind(producto)
            }
        })
    }

    /* ------------------------- */

   /*  const [producto, setProducto] = useState([])

    const getProducto = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(ListaProductos)}, 2000)
        })   
    }

    useEffect(() => {
        getProducto() 
        .then( (resultado) => {setProducto(resultado)})
    }, []) */

    return(
        <div>
            <CardDetail dataProduct={productoFind}/>
        </div>
    )
}
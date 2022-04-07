import React, {useState, useEffect} from "react"
import CardDetail from '../CardDetail/CardDetail.js'
import ListaProductos from "../../MockProductos.js"
import { useParams } from "react-router-dom";
import { LoadingButton } from '@mui/lab'

export default function CardDetailConteiner(){
    const { id } = useParams()
    const [productoFind, setProductoFind] = useState({})

    useEffect( () => {
        findProductByID()
    }, [id]);

    const findProductByID = () => {
        return ListaProductos.map( (producto) => {
            if(producto.id == id){
                setTimeout( () => {
                    return setProductoFind(producto);
                }, 1500)
            }
        })
    }

    return(
        <div>
            {/* <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
                OBTENIENDO DATOS
            </LoadingButton> */}
            {/* {
                setTimeout(function() {
                    return <CardDetail dataProduct={productoFind}/>;
                }, 1500)
            } */}
            <CardDetail datos={productoFind}/>
        </div>
    )
}
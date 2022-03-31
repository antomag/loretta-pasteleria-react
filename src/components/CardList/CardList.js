import React, {useState, useEffect} from "react"
import Card from "../Card/Card"
import ListaProductos from '../../MockProductos'
import { useParams } from "react-router-dom";

export default function CardList (){
    const { category } = useParams()
    const [productos, setProductos] = useState([])

    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(ListaProductos)}, 1000)
        })   
    }

    useEffect(() => {
        getProductos()
        .then( (resultado) => {findProductByCategory(resultado, category)})
        .catch( (error) => {console.log(`Error: `, error)})
        .finally(()=>{console.log(`Tarea finalizada.`)})
    }, [category])
    
    const findProductByCategory = (ListaProductos, category) => {
        return ListaProductos.map( (producto) => {
            if(producto.category === category){
                return setProductos(producto => [...productos, producto])
            }
        })
    }

    return(
        <div className="gridProductos">
            {productos.map( (producto) => {
                const {id} = producto
                return(
                    <Card datos={producto} key={id}/>
                )
            })
            }
        </div>
    )
}

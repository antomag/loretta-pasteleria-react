import React, {useState, useEffect} from "react"
import Card from "../Card/Card"
import ListaProductos from '../../MockProductos'
import { useParams } from "react-router-dom";
import './CardList.css';
import ButtonsFilter from '../ButtonsFilter/ButtonsFilter'

export default function CardList (){
    const { category } = useParams()
    const [productos, setProductos] = useState([])
    console.log(productos)

    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(ListaProductos)}, 1500)
        })   
    }

    useEffect(() => {
        getProductos()
        .then( (producto) => {
            if(category){
                const productoFiltrado = producto.filter( (product) => product.category === category)
                setTimeout( () => {setProductos(productoFiltrado)}, 1000)
                
            }else{
                setProductos(producto)
            }
        })
        .catch( (error) => {console.log("Error: ", error)})
        .finally( ()=>{console.log(`Tarea finalizada.`)})
    }, [category])

    return(
        <div>
            <ButtonsFilter/>
            <div className="gridProductos">
                {productos.map( (producto) => {
                    const {id} = producto
                    return(
                        <Card datos={producto} key={id}/>
                    )
                })
                }
            </div>
        </div>
    )
}

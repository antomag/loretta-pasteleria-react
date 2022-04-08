import React, {useState, useEffect} from "react"
import Card from "../Card/Card"
import ListaProductos from '../../MockProductos'
import { useParams } from "react-router-dom";
import './CardList.css';
import ButtonsFilter from '../ButtonsFilter/ButtonsFilter'
import LinearProgress from '@mui/material/LinearProgress';

export default function CardList (){
    const { category } = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(ListaProductos)}, 1500)
        })   
    }

    useEffect(() => {
        setLoading(true)
        getProductos()
        .then( (producto) => {
            setLoading(false)
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
        <div style={{margin:10}}>
            <ButtonsFilter/>
            {loading ? (
                <div><LinearProgress color="success" /></div>
            ) : 
            (<div className="gridProductos">
                {productos.map( (producto) => {
                    const {id} = producto
                    return(
                        <Card datos={producto} key={id}/>
                    )
                }
                )}
            </div>
            )
            }
        </div>
    )
}

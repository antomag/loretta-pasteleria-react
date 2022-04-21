import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
//css
import './CardList.css';
//components
import Card from "../Card/Card"
import ButtonsFilter from '../ButtonsFilter/ButtonsFilter'
//mui
import LinearProgress from '@mui/material/LinearProgress';
//firebase
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function CardList (){
    const { category } = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getProductos = async () => {
        const itemsCollection = collection(db , 'productos')
        const productosSnapshot = await getDocs(itemsCollection)
        const listaProductos = productosSnapshot.docs.map( (doc) => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        })
        return listaProductos
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

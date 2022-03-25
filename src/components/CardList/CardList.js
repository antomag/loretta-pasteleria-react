import React, {useState, useEffect} from "react"
import Card from "../Card/Card"

export default function CardList (){
    const ListaProductos = [
        {
            id: 1,
            title: 'Tres Mousses',
            description: '',
            price: 1000,
            img: '/img/1.jpg',
        },
        {
            id: 2,
            title: 'Marquise',
            description: '',
            price: 950,
            img: '/img/2.jpg',
        },
        {
            id: 3,
            title: 'Rogel',
            description: '',
            price: 1200,
            img: '/img/3.jpg',
        }
    ]

    const [productos, setProductos] = useState([])

    const getProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(ListaProductos)}, 2000)
        })   
    }

    useEffect(() => {
        getProductos() 
        .then( (resultado) => {setProductos(resultado)})
        .catch( (error) => {console.log(`Error: `, error)})
        .finally(()=>{console.log(`Tarea finalizada.`)})
    }, [])

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

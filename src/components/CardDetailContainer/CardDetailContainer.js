import React, {useState, useEffect} from "react"
import CardDetail from '../CardDetail/CardDetail.js'

export default function CardDetailConteiner(){
    const producto1 = {
                    id: 1, 
                    title: 'Tres Mousses', 
                    description: 'Torta de tres capas de chocolates; blanco, con leche y amargo. Espumosa y liviana.', 
                    price: 1000, 
                    img: '/img/1.jpg'
                    }
    

    const [producto, setProducto] = useState({})

    const getProducto = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {resolve(producto1)}, 2000)
        })   
    }

    useEffect(() => {
        getProducto() 
        .then( (resultado) => {setProducto(resultado)})
    }, [])

    return(
        <div>
            <CardDetail datos={producto}/>
        </div>
    )
}
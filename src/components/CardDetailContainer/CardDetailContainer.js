import React, {useState, useEffect} from "react"
import CardDetail from '../CardDetail/CardDetail.js'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase.js";
import { useNavigate } from 'react-router-dom';

export default function CardDetailConteiner(){
    const { id } = useParams()
    const [productoFind, setProductoFind] = useState({})
    const navigate = useNavigate()

    const getProducto = async () => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let producto = docSnap.data()
            producto.id = docSnap.id
            setProductoFind(producto)
        } else {
            navigate(`*`)
            console.log("No such document!");
        }
    }

    useEffect( () => {
        getProducto()
    }, [id]);

    return(
        <div>
            <CardDetail datos={productoFind}/>
        </div>
    )
}
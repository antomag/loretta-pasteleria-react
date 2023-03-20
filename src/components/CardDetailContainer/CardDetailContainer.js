import React, {useState, useEffect} from "react"
import { useParams , useNavigate} from "react-router-dom";
//components
import CardDetail from '../CardDetail/CardDetail.js'
//firebase
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase.js";

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
        <CardDetail datos={productoFind}/>
    )
}
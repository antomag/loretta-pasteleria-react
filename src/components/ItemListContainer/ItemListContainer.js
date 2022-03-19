import Card from "../Card/Card"
import './ItemListContainer.css';

export default function ItemListContainer(){
    return(
        <div>
            <h2>LISTADO DE PRODUCTOS</h2>
            <h3>LORETTA PASTELERIA</h3>
            <div className="gridProductos">
                <Card img='/img/1.jpg' titulo='Tres Mousses' precio={1000}/>
                <Card img='/img/2.jpg' titulo='Marquise' precio={950}/>
                <Card img='/img/3.jpg' titulo='Rogel' precio={1220}/>
            </div>
        </div>
    )
}
import './CardDetail.css'

export default function CardDetail({datos}){
    const {title, description, price, img} = datos
    
    return(
        <div className="cardDetail">
            <img src={img} className="imgCardDetail"/>
            <div className="infoCard">
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>${price}</h3>
                <button>¡¡COMPRAR AHORA!!</button>
            </div>
        </div>
        
    )
}
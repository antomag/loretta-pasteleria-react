import {Link} from 'react-router-dom'
//css
import './ButtonsFilter.css'
//mui
import { ButtonGroup, Button} from '@mui/material'

export default function ButtonsFilter(){
    return(
        <div className="botonesFiltrosProductos">
            <ButtonGroup variant="text" aria-label="text button group" >
                <Button><Link to={`/postres`}>POSTRES</Link></Button>
                <Button><Link to={`/tortas`}>TORTAS</Link></Button>
                <Button><Link to={`/minis`}>MINIS</Link></Button>
                <Button><Link to={`/tartas`}>TARTAS</Link></Button>
            </ButtonGroup>
        </div>
    )
}
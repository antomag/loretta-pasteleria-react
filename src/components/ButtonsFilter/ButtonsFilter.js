import { ButtonGroup, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import '../ButtonsFilter/ButtonsFilter'

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
import CardListContainer from "../components/CardListContainer/CardListContainer"
import { Container } from '@mui/material'
import ButtonsFilter from "../components/ButtonsFilter/ButtonsFilter"

export default function ProductosPage(){
    return(
        <Container>
            <ButtonsFilter/>
            <CardListContainer/>
        </Container>
    )
}


import { Link } from 'react-router-dom';

export default function Logo() {
    return(
        //no puedo linkear el logo porqe me tira un error de consola pathname(? y no se que es.
        <div style={{margin: '5px'}}>
            <img src='/img/logo.png' alt="Logo Loretta Pasteleria" style={{height: '10vh'}} />
        </div>
    )
}
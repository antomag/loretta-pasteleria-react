import { useNavigate } from 'react-router-dom';

export default function Logo() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate(`/`)
    }

    return(
        <div style={{margin: '5px'}} onClick={goHome}>
            <img src='/img/logo.png' alt="Logo Loretta Pasteleria" style={{height: '10vh'}} />
        </div>
    )
}
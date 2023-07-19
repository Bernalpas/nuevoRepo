
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div className='container'>
            <div>
            <h1>Home</h1>
            <h2>
                Bienvenido a nuestra página Principal, en este 
                <Link to='/main'> Formulario </Link>
            </h2>
            </div>
        </div>
    )
}

export default Home;
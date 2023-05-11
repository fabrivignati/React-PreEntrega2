import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import mainLogo from './main-logo.png'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav style={{ backgroundColor: '#5d8704', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2vh' }}>
            <Link to='/'> <img src={mainLogo} alt="Good Morning!"></img></Link>
            <div>
                <Link to='/category/televisores' className="mi-enlace"> Smart TVs ·</Link>
                <Link to='/category/audio'className="mi-enlace"> Sistemas de Audio ·</Link>
                <Link to='/category/camaras' className="mi-enlace"> Cámaras Digitales </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
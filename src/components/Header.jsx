import { Link } from 'react-router-dom';
import Logo  from '../images/logo.png';
import '../styles/Header.css'

function Header() {
    return (
        <nav>
             <img src={Logo} alt='logo' />
             <div>
                  <Link to='/'>Acceuil</Link>
                  <Link to='/Apropos'>Apropos</Link>
             </div>
        </nav>
    )
}

export default Header
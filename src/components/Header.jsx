import { NavLink } from 'react-router-dom';
import Logo  from '../images/logo.png';
import '../styles/Header.css'

function Header() {
    return (
        <nav>
            <NavLink to='/'>
                <img src={Logo} alt='logo' />
             </NavLink>
             <div>
                  <NavLink to='/'>Acceuil</NavLink>
                  <NavLink to='/Apropos'>A propos</NavLink>
             </div>
        </nav>
    )
}

export default Header
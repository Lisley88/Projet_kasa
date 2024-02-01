import { NavLink } from 'react-router-dom';
import Logo  from '../images/logo.png';
import '../styles/Header.scss'

function Header() {
    return (
        <nav className='navbar'>
            <NavLink to='/'>
                <img src={Logo} alt='logo' />
             </NavLink>
             <div>
                  <NavLink className='navbar__menu' to='/'>Acceuil</NavLink>
                  <NavLink className='navbar__menu' to='/Apropos'>A Propos</NavLink>
             </div>
        </nav>
    )
}

export default Header
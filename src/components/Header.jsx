import { NavLink, Link } from 'react-router-dom';
import Logo  from '../images/logo.png';
import '../styles/Header.scss';

function Header() {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar__logo'>
                <img src={Logo} alt='logo' />
             </Link>
             <div className='navbar__menus'>
                  <NavLink className='navbar__menu' to='/'>Acceuil</NavLink>
                  <NavLink className='navbar__menu' to='/apropos'>A Propos</NavLink>
             </div>
        </nav>
    )
}

export default Header
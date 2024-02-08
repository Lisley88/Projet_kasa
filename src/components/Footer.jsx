import '../styles/Footer.scss';
import logo from '../images/logo_footer.png';

function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} className='footer__logo' alt="logo" />
            <p className='footer__msg'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
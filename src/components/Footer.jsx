import '../styles/Footer.css'
import logo from '../images/logo_footer.png'
function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} className='logo-footer' alt="logo" />
            <p className='footer-msg'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
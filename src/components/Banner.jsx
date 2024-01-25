import imgHome from '../images/image_source_1.png';
import imgAbout from '../images/image_source_ 2.png';
import '../styles/Banner.css'

function Banner(props) {
    if (props.page === 'home') {
        return (
            <section className='banner'>
                <div className='banner-box'>
                    <img className='img-banner' src={imgHome} alt='Côtes mer' title='Chez vous, partout et ailleurs' />
                </div>
                <div className='banner-box'>
                    <p className='msg-banner'>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    } else if (props.page === 'about') {
        return (
            <section className='banner-apropos'>
                <div className='banner-apropos'>
                    <img className='img-banner' src={imgAbout} alt='Photo montagne' />
                </div>
            </section>
        )
    }
}

export default Banner

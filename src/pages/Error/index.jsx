import '../../styles/Error.scss'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <main className='errorbox'>
            <h1 className='errorbox__404'>404</h1>
            <p className='errorbox__msg'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='errorbox__link' to='/'>Retourner sur la page d’accueil</Link>
        </main>
    )
  }

export default Error
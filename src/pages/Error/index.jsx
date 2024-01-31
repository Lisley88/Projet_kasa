import '../../styles/error.scss'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <main className='error-box'>
            <h1 className='error-404'>404</h1>
            <p className='error-msg'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='linktohome' to='/'>Retourner sur la page d’accueil</Link>
        </main>

    )
  }

export default Error
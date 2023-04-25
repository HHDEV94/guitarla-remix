import { Link } from '@remix-run/react'
import logo from '-/img/logo.svg'
import Navegacion from './navegacion'

function Header() {
  return (
    <header className='header'>
      <div className='header__contenedor barra'>
        <Link to={'/'}>
          <img className='header__logo' src={logo} alt='logo imagen' />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header

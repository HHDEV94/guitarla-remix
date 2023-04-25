import { Link, useLocation } from '@remix-run/react'

function Navegacion() {
  const { pathname } = useLocation()

  const objClass = {
    home: pathname === '/' ? 'active' : '',
    aboutus: pathname === '/nosotros' ? 'active' : '',
    store: pathname === '/tienda' ? 'active' : '',
    blog: pathname === '/blog' ? 'active' : ''
  }

  return (
    <nav className='navegacion'>
      <Link className={`navegacion__link ${objClass.home}`} to={'/'}>
        Inicio
      </Link>
      <Link className={`navegacion__link ${objClass.aboutus}`} to={'/nosotros'}>
        Nosotros
      </Link>
      <Link className={`navegacion__link ${objClass.store}`} to={'/tienda'}>
        Tienda
      </Link>
      <Link className={`navegacion__link ${objClass.blog}`} to={'/blog'}>
        Blog
      </Link>
    </nav>
  )
}

export default Navegacion

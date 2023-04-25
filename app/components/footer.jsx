import React from 'react'
import Navegacion from './navegacion'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__contenedor footer__contenido'>
        <Navegacion />
        <p className='footer__copyright'>All Rights Reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

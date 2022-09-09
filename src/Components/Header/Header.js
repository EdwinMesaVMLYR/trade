import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
// import imgecatalogo from '../../images/catalogo.svg'

function Header () {
  return (
    <header className='header'>
      <div className="navbar">
      </div>
      <nav className='navbar-brand 2xl:max-w-screen-xl mx-auto'>
        <div className='navbar-logo'>
          <a href='/'>
            <figure>
              <img src={logo} alt="Piramide de Precios" className='logo-header'/>
            </figure>
          </a>
        </div>
        <div className='navbar-nav'>
          <nav>
            <Link className='navbar-nav-text' to="/piramide-de-precios"> PIRAMIDE DE PRECIOS </Link>
            {/* <Link to="/">
              <figure>
                <img src={imgecatalogo} alt="Catálogo Cervecería ABInBev" className='logo-catalogo-header'/>
              </figure>
            </Link> */}
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Header

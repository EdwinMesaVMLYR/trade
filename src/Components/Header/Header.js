import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../logo.svg'
import imgecatalogo from '../../images/catalogo.svg'

function Header () {
  const locationUrl = useLocation().pathname
  return (
    <header className='header'>
      <div className="navbar">
      </div>
      <nav className='navbar-brand 2xl:max-w-screen-xl mx-auto'>
        <div className='navbar-logo'>
          <a href='/spmk'>
            <figure>
              <img src={logo} alt="Piramide de Precios" className='logo-header'/>
            </figure>
          </a>
        </div>
        <div className='navbar-nav'>
          <nav>
            {locationUrl !== '/piramide-de-precios' && locationUrl !== '/404'
              ? <>
                <Link className='navbar-nav-text' to="/piramide-de-precios"> PIRAMIDE DE PRECIOS </Link>
              </>
              : <Link to="/">
                <figure>
                  <img src={imgecatalogo} alt="Catálogo Cervecería ABInBev" className='logo-catalogo-header' />
                </figure>
              </Link>
            }
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Header

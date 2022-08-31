import React from 'react'
import logo from '../../logo.svg'

function Header () {
  return (
    <header>
      <div className="navbar">
      </div>
      <nav className='navbar-brand 2xl:max-w-screen-xl mx-auto'>
        <div className='navbar-logo'>
          <a href='/'>
            <figure>
              <img src={logo} alt="Catálogo Cervecería ABInBev" className='logo-header'/>
            </figure>
          </a>
        </div>
        <div className='navbar-nav'>
          <a className='navbar-nav-text' href='/'>
          PIRÁMIDE DE PRECIOS
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header

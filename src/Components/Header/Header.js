import React from 'react'
import logo from '../../logo.svg'

function Header () {
  return (
    <header>
      <div className="h-10 bg-header bg-cover">
      </div>
      <nav className='navbar-brand md:flex-row md:justify-between md:max-w-[85%]'>
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

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
          <span className='navbar-nav-text after:content-[""] after:bg-triangle after:bg-contain after:bg-no-repeat after:absolute after:w-7 after:h-5 after:right-[-2.5rem]'>
          PIRÁMIDE DE PRECIOS
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import logo from '../../logo.svg'

function Header () {
  return (
    <header>
      <div className="h-10 bg-header bg-cover">
      </div>
      <nav className='nav-brand md:flex-row md:justify-between'>
        <div>
          <a href='/'>
            <figure>
              <img src={logo} alt="Catálogo Cervecería ABInBev" />
            </figure>
          </a>
        </div>
        <div>
          <span>
          PIRÁMIDE DE PRECIOS
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header

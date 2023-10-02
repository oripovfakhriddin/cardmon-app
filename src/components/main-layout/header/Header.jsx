import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'




const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className='container'>
          <ul className='nav gap-5'>
            <li className='nav-item'>
              <NavLink to="/home" className='nav-link header__link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'> 
              <NavLink to="/mydebts" className='nav-link header__link'>
                My Debts
              </NavLink>
            </li>
            <li className='nav-item'> 
              <NavLink to="/othersdebts" className='nav-link header__link'>
                Debts of others
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header
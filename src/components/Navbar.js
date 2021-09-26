import React from 'react'
import Logo from '../assets/images/brand.png'

class Navigation extends React.Component {
  render () {
  	return (
      <nav className='nav d-flex flex-column'>
        <div className='nav__menu d-flex flex-row'>
          <div className='nav__menu-left'>
            <a href='#' className='nav__link'>About</a>
            <a href='#' className='nav__link'>Newsletter</a>
            <a href='#' className='nav__link nav__notifications'>Notifications</a>
          </div>
          <img src={Logo} className='nav__brand'></img>
          <div className='nav__menu-right'>
            <a href='#' className='nav__link nav__account'>My account</a>
            <a href='#' className='nav__link nav__favourites'>Favourites</a>
          </div>
        </div>
        <div className='nav__categories d-flex flex-row'>
          <a href='#' className='nav__link nav__trending'>Trending</a>
          <a href='#' className='nav__link'>Fashion</a>
          <a href='#' className='nav__link'>#Search tags</a>
          <a href='#' className='nav__link'>Nature</a>
          <a href='#' className='nav__link'>Animals</a>
        </div>
      </nav>
    )
  }
}

export default Navigation

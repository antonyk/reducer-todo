import React from 'react'
import logo from './logo.svg';


function Header() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>
          ToDo
        </p>
      </div>
      <div className='menu-links'>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Main Menu
        </a>
      </div>
    </header>
  )
}

export default Header;
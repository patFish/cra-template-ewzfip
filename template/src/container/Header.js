import React from 'react'
import { Logo, Version } from '../components'

import './style/Header.css'

const Header = () => {
  return (
    <header className="App-header">
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Version />
    </header>
  )
}

export default Header

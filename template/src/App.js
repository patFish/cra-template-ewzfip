import React from 'react'
import { Header } from './container'
import './App.css'

import { makeServer } from './mockServer'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App

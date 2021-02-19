import React from 'react'

const pack = require('../../package.json')
import './style/Version.css'

const Version = () => {
  return <small className="App-version">{pack.version}</small>
}

export default Version

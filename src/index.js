import ReactDOM from 'react-dom'
import React from 'react'

import './styles/index.css'
import './styles/device-spinner.css'

import App from './App'

ReactDOM.render(
  <App />, // eslint-disable-line
  global.window.document.getElementById('app'),
)

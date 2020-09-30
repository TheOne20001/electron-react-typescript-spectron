import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/app'

// Create main element
const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

// Render components
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  mainElement
)

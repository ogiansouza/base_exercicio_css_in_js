import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Globalstyle'
import { tema } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()

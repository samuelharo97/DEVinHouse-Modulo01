import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
)

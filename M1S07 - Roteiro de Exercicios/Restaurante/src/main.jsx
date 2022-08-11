import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'
import {Cards} from './components/Card/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <Header/>
      <>
      <h2>Dish of the day</h2>
      </>
        <Menu>
          <Cards/>
        </Menu>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>
)
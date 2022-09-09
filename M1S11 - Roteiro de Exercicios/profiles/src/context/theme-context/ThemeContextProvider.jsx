import { ThemeContext } from './theme-context'
import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'

export const ThemeContextProvider = ({ children }) => {
  const [tema, setTema] = useState('darkTheme')

  const switchTheme = () => {
    if (tema === 'dark') {
      localStorage.setItem('@Profiles: Theme', JSON.stringify('light'))
      return setTema('light')
    } else {
      localStorage.setItem('@Profiles: Theme', JSON.stringify('dark'))
      return setTema('dark')
    }
  }

  useEffect(() => {
    return () => {
      setTema(JSON.parse(localStorage.getItem('@Profiles: Theme')) || null)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ tema, setTema, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}

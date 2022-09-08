import { ThemeContext } from './theme-context'
import PropTypes from 'prop-types'
import { themes } from '../../styles/themes'

import { useState, useEffect } from 'react'

export const ThemeContextProvider = ({ children }) => {
  const { darkTheme, lightTheme } = themes
  const [theme, setTheme] = useState(darkTheme)

  const switchTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme)
      localStorage.setItem('@Profiles: Theme', JSON.stringify(lightTheme))
    } else {
      setTheme(darkTheme)
      localStorage.setItem('@Profiles: Theme', JSON.stringify(darkTheme))
    }
  }

  useEffect(() => {
    return () => {
      setTheme(JSON.parse(localStorage.getItem('@Profiles: Theme')) || null)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ darkTheme, lightTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}

import { ThemeContext } from './theme-context'
import PropTypes from 'prop-types'
import { darkTheme, lightTheme } from '@styles'
import { useState /* useEffect */ } from 'react'

export const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(true)

  const switchTheme = () => {
    if (dark) {
      localStorage.setItem('@Profiles: Theme', JSON.stringify(!dark))
      return setDark(!dark)
    } else {
      localStorage.setItem('@Profiles: Theme', JSON.stringify(dark))
      return setDark(!dark)
    }
  }

  /*  useEffect(() => {
    return () => {
      setDark(JSON.parse(localStorage.getItem('@Profiles: Theme')) || null)
    }
  }, []) */

  return (
    <ThemeContext.Provider
      value={{ theme: dark ? darkTheme : lightTheme, switchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}

import { Navbar } from '@components'
import { useThemeContext } from '@context'
import { GlobalStyles } from '@styles'
import { ThemeProvider } from 'styled-components'
export const Layout = () => {
  const { theme } = useThemeContext()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  )
}

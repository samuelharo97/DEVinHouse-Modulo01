import { Navbar } from '@components'
import { GlobalStyles, themes } from '@styles'
import { ThemeProvider } from 'styled-components'
export const Layout = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  )
}

import { Navbar, ProfileTable } from '@components'
import { useThemeContext } from '@context'
import { GlobalStyles } from '@styles'
import { ThemeProvider } from 'styled-components'
import { Container } from './styles'
export const Layout = () => {
  const { theme } = useThemeContext()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <ProfileTable></ProfileTable>
      </Container>
    </ThemeProvider>
  )
}

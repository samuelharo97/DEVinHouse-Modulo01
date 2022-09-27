import { useThemeContext } from '@context'
import { Container } from './styles'
export const Navbar = colorScheme => {
  const { switchTheme, theme } = useThemeContext()
  return (
    <Container variant={theme}>
      <img src="logo.png" alt="logo"></img>
      <nav>
        <h1>GitFav</h1>
      </nav>
      <button onClick={switchTheme}></button>
    </Container>
  )
}

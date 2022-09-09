import { useThemeContext } from '@context'
import { Container } from './styles'
export const Navbar = colorScheme => {
  const { switchTheme, tema } = useThemeContext()
  console.log(tema)
  return (
    <Container variant={tema}>
      <img src="logo.png" alt="logo"></img>
      <nav>
        <h1>My favorite profiles</h1>
      </nav>
      <button onClick={switchTheme}></button>
    </Container>
  )
}


import { Logo } from '../Logo/index.jsx'
import { Container } from './styles.js'

export function Header(){
  return(
    <Container>
      <Logo/>
      <a href="#menu"><strong>Cardápio</strong></a>
    </Container>
  )
}

import { Container } from './styles.js'

export function Header(){
  return(
    <Container>
      <div>
      <img src="\src\assets\logo3.png" alt="logo da pastelaria" />
      <h1>Pastel do Haro</h1>
      </div>
      <a href="#menu"><strong>Cardápio</strong></a>
    </Container>
  )
}
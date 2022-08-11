import { Cards } from "../Card/Card";
import { Container } from "./styles";


export const Menu = () => {
  return(

    <Container>
      <Cards 
      name={'Burguer'}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      price={22.00}
      prepTime={'15 minutes'}
      url={'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}/>
      <Cards
      name={'Pesto Pasta'}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      price={26.00}
      prepTime={'30 minutes'}
      url={'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} 
      />
    </Container>
  )
}

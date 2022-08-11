import PropTypes from 'prop-types';
import { CardLayout } from "./styles";


export const Cards = ({url, name, description, price, prepTime} ) => {

  return(
    <CardLayout>
        <img src={url} />
        <h3>{name}</h3>
        <strong>{description}</strong>
      
         <span>{price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}</span>
         <span>{prepTime}</span>
    </CardLayout>
  )
}


Cards.propTypes = {
  food: PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  prepTime: PropTypes.string.isRequired,
})
}
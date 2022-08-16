import PropTypes from 'prop-types'
import { CardLayout } from './styles'

export const Cards = ({ data }) => {
  return (
    <CardLayout>
      <img src={data.url} />
      <h3>{data.name}</h3>
      <strong>{data.description}</strong>

      <span>
        {data.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </span>
      <span>{data.prepTime}</span>
    </CardLayout>
  )
}

Cards.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    prepTime: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

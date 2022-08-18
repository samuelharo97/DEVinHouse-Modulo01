import PropTypes from 'prop-types'
import { CardLayout } from './styles'
import { useState } from 'react'

export const Cards = ({ data }) => {
  const [selecionado, setSelecionado] = useState(false)

  function onSelecionar() {
    return setSelecionado(!selecionado)
  }

  return (
    <CardLayout
      onClick={() => {
        onSelecionar()
      }}
    >
      <img src={data.url} />
      <h3>{data.name}</h3>
      <strong>{data.description}</strong>

      <span className={selecionado ? 'isRed' : ''}>
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
  }),
  selecionado: PropTypes.bool,
  onSelecionar: PropTypes.func
}

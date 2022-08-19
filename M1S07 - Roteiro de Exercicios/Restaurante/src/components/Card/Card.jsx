import PropTypes from 'prop-types'
import { CardLayout, CardLayout2 } from './styles'
import { useState } from 'react'

export const Cards = ({ data, onSelecionar }) => {
  const [Selecionado, setSelecionado] = useState(false)

  function onSelecionar() {
    console.log(Selecionado)
    return setSelecionado(!Selecionado)
  }

  return (
    <CardLayout onClick={() => onSelecionar()}>
      <img src={data.url} />
      <h3 className={Selecionado ? 'isSelected' : ''}>{data.name}</h3>
      <strong>{data.description}</strong>
      <span className={Selecionado ? 'isSelected' : ''}>
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

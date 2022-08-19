import PropTypes from 'prop-types'
import { CardLayout, CardLayout2 } from './styles'
import { useState } from 'react'

export const Cards = ({ data, selected = false, onSelecionar }) => {
  /*   const [selected, setSelected] = useState(false)
   */
  function onSelecionar() {
    console.log(selected)
    return (selected = !selected)
  }

  return (
    <CardLayout onClick={() => onSelecionar()}>
      <img src={data.url} />
      <h3>{data.name}</h3>
      <strong>{data.description}</strong>
      <span className={selected ? 'isSelected' : ''}>
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
  selected: PropTypes.bool,
  onSelecionar: PropTypes.func
}

import PropTypes from 'prop-types'

import { Card } from '@components'

import styles from './ListaCards.module.css'
import { useState } from 'react'

export const ListaCards = ({ produtos }) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedCardId, setSelectedCardId] = useState([])

  const handleSelected = clickedId => {
    if (selectedCardId.includes(clickedId)) {
      setSelectedCardId(selectedCardId.filter(id => id !== clickedId))
    } else {
      setSelectedCardId([...selectedCardId, clickedId])
    }
  }

  return (
    <ul className={styles.lista}>
      {produtos.map(produto => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            selected={selectedCardId.includes(produto.id)}
            onSelect={() => handleSelected(produto.id)}
          />
        </li>
      ))}
    </ul>
  )
}

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired
}

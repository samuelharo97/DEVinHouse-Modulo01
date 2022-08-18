import PropTypes from 'prop-types'

import { Cards } from '../Card/Card'
import { useState } from 'react'
import { ULlayout } from './styles'
/* import { data } from '../../data.json'
 */

export function CardsList({ data }) {
  const [toggleCard, setToggleCard] = useState(false)

  const changeState = () => {
    toggleCard ? setToggleCard(true) : setToggleCard(false)
    console.log(toggleCard)
  }

  return (
    <ULlayout>
      {data.map(data => (
        <li key={data.id}>
          <Cards data={data} />
        </li>
      ))}
    </ULlayout>
  )
}

CardsList.propTypes = {
  data: PropTypes.array.isRequired
}
/*  */

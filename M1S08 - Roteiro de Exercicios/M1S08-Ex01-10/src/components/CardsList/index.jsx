import PropTypes from 'prop-types'

import { Cards } from '../Card/Card'
import { useEffect, useState } from 'react'
import { ULlayout } from './styles'

export function CardsList({ data }) {
  const [id, setId] = useState()
  return (
    <ULlayout>
      {data.map(data => (
        <li key={data.id}>
          <Cards /* selected */ data={data} />
        </li>
      ))}
    </ULlayout>
  )
}

CardsList.propTypes = {
  data: PropTypes.array.isRequired
}
/*  */

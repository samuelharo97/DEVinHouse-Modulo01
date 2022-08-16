import PropTypes from 'prop-types'

import { Cards } from '../Card/Card'

import { ULlayout } from './styles'
/* import { data } from '../../data.json'
 */
export const CardsList = ({ data }) => (
  <ULlayout>
    {data.map(data => (
      <li key={data.id}>
        <Cards data={data} />
      </li>
    ))}
  </ULlayout>
)

CardsList.propTypes = {
  data: PropTypes.array.isRequired
}

import PropTypes from 'prop-types'
import { Title } from './styles'
import { CardsList } from '../CardsList'

export const SubSection = ({ data, subSection }) => {
  const filteredData = data.filter(food => food.subSection === subSection)

  return (
    <div>
      <Title>{subSection}</Title>

      <CardsList data={filteredData} />
    </div>
  )
}

SubSection.propTypes = {
  data: PropTypes.array.isRequired,
  subSection: PropTypes.string
}

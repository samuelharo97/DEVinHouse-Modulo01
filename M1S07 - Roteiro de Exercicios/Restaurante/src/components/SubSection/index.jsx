import PropTypes from 'prop-types'

import { CardsList } from '../CardsList'

export const SubSection = ({ data, subSection }) => {
  const filteredData = data.filter(food => food.subSection === subSection)

  return (
    <div>
      <h3>{subSection}</h3>

      <CardsList data={filteredData} />
    </div>
  )
}

SubSection.propTypes = {
  data: PropTypes.array.isRequired,
  subSection: PropTypes.string
}

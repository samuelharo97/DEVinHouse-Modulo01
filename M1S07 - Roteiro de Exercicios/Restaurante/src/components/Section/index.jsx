import PropTypes from 'prop-types'
import { Container } from './styles'
import { CardsList } from '../CardsList'
import { SubSection } from '../SubSection'

export const Section = ({ name, data, subSection }) => {
  return (
    <Container>
      <legend>
        <h2>{name}</h2>
      </legend>
      {subSection?.length > 0 ? (
        subSection.map((sub, index) => (
          <SubSection key={index} data={data} subSection={sub} />
        ))
      ) : (
        <CardsList data={data} />
      )}
    </Container>
  )
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  subSection: PropTypes.arrayOf(PropTypes.string)
}

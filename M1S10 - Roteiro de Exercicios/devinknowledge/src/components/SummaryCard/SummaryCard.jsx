import PropTypes from 'prop-types'

export const SummaryCard = ({ title, count }) => {
  return (
    <button>
      <h3>{title}</h3>
      <span>{count}</span>
    </button>
  )
}

SummaryCard.propTypes = {
  /* category: PropTypes.shape({ */
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
  /*  }) */
}

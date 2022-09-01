import PropTypes from 'prop-types'

export const CardList = ({ children }) => {
  return (
    <main>
      <ul className="cards-container">{children}</ul>
    </main>
  )
}

CardList.propTypes = {
  children: PropTypes.node
}

import PropTypes from 'prop-types'

export const TipCard = ({ dica }) => {
  return (
    <li className="cards-container">
      <div className="card">
        <h2 className="cardTitle">{dica.title}</h2>
        <h4 className="cardSkill">Linguagem/Skill: {dica.language}</h4>
        <h4 className="cardCategory">Categoria: {dica.category}</h4>
        <p className="cardContent">{dica.description}</p>
        <div className="card-buttons">
          <button className="cardDelete">
            <img
              src="/assets/images/delete-card.png"
              className="cardDelete"
              alt="deletar a dica"
            />
          </button>
          <button className="cardEdit">
            <img
              src="/assets/images/edit-card.png"
              className="cardEdit"
              alt="editar a dica"
            />
          </button>

          <button /* {dica.hasYoutube} */ className="videoCard ">
            <a href={dica.video} rel="noreferrer" target="_blank">
              <img
                src="/assets/images/video-card.png"
                alt="video sobre a dica"
                className="videoCard"
              />
            </a>
          </button>
          <button className="expand-card">
            <img
              src="/assets/images/launch-icon.png"
              className="expand-card"
              alt="expande a dica"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

TipCard.propTypes = {
  dica: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })
}

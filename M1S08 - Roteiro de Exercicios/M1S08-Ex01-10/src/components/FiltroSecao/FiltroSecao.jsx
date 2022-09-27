import PropTypes from 'prop-types'
import styles from './FiltroSecao.module.css'

export function FiltroSecao({ array, onSelecionarSecoes }) {

  

  return (
    <div className={styles.buttonContainer}>
      {array.map((item, index) => (
        <button
          className={styles.button}
          key={index}
          onClick={() => onSelecionarSecoes(item.nome)}
        >
          {item.nome}
        </button>
      ))}
    </div>
  )
}

FiltroSecao.propTypes = {
  array: PropTypes.array,
  onSelecionarSecoes: PropTypes.func
}

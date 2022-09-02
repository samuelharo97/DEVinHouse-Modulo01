import { AppContext } from './app-context'
import PropTypes from 'prop-types'
export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={'conectado'}>{children}</AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node
}

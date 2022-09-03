/* eslint-disable no-unused-vars */
import { AppContext } from './app-context'
import PropTypes from 'prop-types'
import { useState } from 'react'
export const AppContextProvider = ({ children }) => {
  const [allTips, setAllTips] = useState([])
  const [filter, setFilter] = useState(null)
  const createTip = data => {
    setAllTips(prevData => [...prevData, data])
  }
  const filterTip = query => {
    if (query) {
      setFilter(query)
    } else {
      setFilter(null)
    }
  }

  const tips = filter
    ? allTips.filter(tip => tip.titulo.includes(filter))
    : allTips

  return (
    <AppContext.Provider value={{ createTip, filterTip, tips }}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node
}

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

  const sortByCategory = () => {
    const categories = Array.from(new Set(allTips.map(tip => tip.category)))
    return categories.map(catName => {
      const count = allTips.filter(tip => tip.category === catName).length
      return { title: catName, count }
    })
  }

  const categories = sortByCategory()

  const tips = filter
    ? allTips.filter(tip => tip.title.includes(filter))
    : allTips

  return (
    <AppContext.Provider value={{ createTip, filterTip, tips, categories }}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node
}

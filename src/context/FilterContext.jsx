import { useState, createContext } from 'react'
 
const FilterContext = createContext()

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState()

  const changeFilter = (searchFilter) => {
    setFilter(searchFilter)
  }

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContextProvider, FilterContext }
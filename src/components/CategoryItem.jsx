import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const CategoryItem = ({category}) => {

  const { changeFilter } = useContext(FilterContext)

  return (
    <li className={itemStyles} onClick={ () => changeFilter(category) }>
      {category}
    </li>
  )
}

const itemStyles = `
  p-1
  mt-1
  hover:bg-gray-200 duration-200
  hover:text-xl
  cursor-pointer
  border-b-2 border-solid
`

export { CategoryItem }
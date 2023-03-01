
const CategoryItem = ({category}) => {
  return (
    <li className={itemStyles}>
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

export default CategoryItem
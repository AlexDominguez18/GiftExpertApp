import { useState } from 'react'
import AddCategory from './AddCategory'
import CategoryItem from './CategoryItem'

const Categories = () => {

  const [ categories, setCategories ] = useState(['Batman', 'Superman', 'Spiderman'])

  const addCategory = (category) => {
    if (category.trim().length === 0)
      return

    if (categories.includes(category))
      return    

    setCategories([...categories, category])
  }

  return (
    <div className={containerStyles}>
      <h2 className={titleStyles}>Categories</h2>
      <div className="flex flex-wrap">
        <ol className={listStyles}>
          {
            categories.map((category, index) => <CategoryItem key={index} category={category} />)
          }
        </ol>
        <AddCategory addCategory={addCategory} />
      </div>
    </div>
  )
}

const containerStyles = `
  container
  p-5
  mt-5
  border border-solid
  bg-slate-100
  rounded-lg
  shadow-lg
  lg:mx-auto
`

const titleStyles = `
  mx-auto
  text-center
  text-slate-700
  text-3xl
  font-bold
`

const listStyles = `
  p-3
  mt-3
  list-none
  basis-1/2
`

export default Categories
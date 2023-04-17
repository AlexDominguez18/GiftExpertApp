import { useState, useContext } from 'react'
import { AddCategory, CategoryItem } from './'
import { useCategoriesStorage } from "../hooks/useCategoriesStorage"
import { FilterContext } from '../context/FilterContext'

const Categories = () => {
  const { savedCategories, saveCategorie } = useCategoriesStorage()
  const [ categories, setCategories ] = useState(savedCategories)
  const { changeFilter } = useContext(FilterContext);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return    
    setCategories([...categories, newCategory])
    saveCategorie(newCategory)
    changeFilter(newCategory)
  }

  return (
    <div className={containerStyles}>
      <h2 className={titleStyles}>Categories</h2>
      <div className="flex flex-wrap">
        <ol className={listStyles}>
          {
            categories.length
              ? categories.map((category) => <CategoryItem key={category} category={category} />)
              : <p className="text-center text-slate-700">No categories</p>
          }
        </ol>
        <AddCategory onNewCategory={ addCategory } />
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

export { Categories }

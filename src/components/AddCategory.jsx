import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddCategory = ({ onNewCategory }) => {

  const [ category, setCategory ] = useState('')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const categoryTrim = category.trim()

    if (categoryTrim.length === 0)
      return
  
    onNewCategory(category)
    setCategory('')
  }

  return (
    <form className={ addCategoryStyles } onSubmit={ handleSubmit }>
      <input 
        type="text"
        className={ addCategoryInputStyles } 
        value={ category }
        onChange={ handleCategoryChange }
      />
      <button 
        className={addCategoryButtonStyles}
        placeholder="Add category..."
      >
        <FaPlus />
        <span className="ml-2">Add category</span>
      </button>
    </form>
  )
}

const addCategoryStyles = `
  basis-1/2
  flex
  flex-col
`

const addCategoryInputStyles = `
  p-2
  m-5
  bg-slate-200
  text-center
  focus:outline-none
  focus:border-b
  border-black
`

const addCategoryButtonStyles = `
  p-2
  mx-5
  px-5
  bg-slate-600
  text-white
  font-bold
  rounded-md
  inline-flex
  items-center
  text-sm
  justify-center
  hover:bg-slate-800
`

export default AddCategory
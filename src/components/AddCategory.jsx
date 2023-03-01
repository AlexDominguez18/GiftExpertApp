import { useState } from 'react'

const AddCategory = ({addCategory}) => {

  const [ category, setCategory ] = useState('')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addCategory(category)
    setCategory('')
  }

  return (
    <form className={ addCategoryStyles } onSubmit={ e => handleSubmit(e) }>
      <input 
        type="text"
        className={ addCategoryInputStyles } 
        value={ category }
        onChange={ e => handleCategoryChange(e) }
      />
      <button 
        className={addCategoryButtonStyles}
        placeholder="Add category..."
      >
        Add category
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
  bg-slate-600
  text-white
  font-bold
  hover:bg-slate-800
  rounded-md
`

export default AddCategory
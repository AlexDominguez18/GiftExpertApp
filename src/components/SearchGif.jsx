import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import { SearchIcon } from "./"

const SearchGif = () => {
  const { changeFilter } = useContext(FilterContext) 

  const handleSearch = (e) => {
    const value = e.target.value
    if (!value) changeFilter(undefined)
    else changeFilter(value)
  }

  return (
    <div className={ searchIconStyles }>
      <SearchIcon />
      <input 
        className={ inputStyles }
        type="text"
        placeholder="Search gif.."
        onChange={ handleSearch }
      />
    </div>
  )
}

const searchIconStyles = `
  basis-3/4
  relative
`

const inputStyles = `
  pl-10
  py-2
  text-slate-100
  bg-slate-700
  w-full
  md:w-1/4
  rounded-full
  caret-slate-100
  focus:outline-none
  focus:w-full
  duration-500
`

export { SearchGif }

import SearchIcon from "./SearchIcon"

const SearchGif = () => {
  return (
    <div className={ searchIconStyles }>
      <SearchIcon />
      <input 
        className={ inputStyles }
        type="text"
        placeholder="Search gif.." 
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
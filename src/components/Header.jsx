import SearchGift from "./SearchGift"

const titleStyles = `
  text-center
  basis-1/4
  animate-text
  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 
  bg-clip-text text-transparent 
  text-2xl
  font-bold
`

const navStyles = `
  bg-slate-800
  p-3 shadow-lg
  flex-wrap
  lg:flex "
`

const Header = ({ title }) => {
  return (
    <nav className={navStyles}>
      <h1 className={titleStyles}>{ title }</h1>
      <SearchGift />
    </nav>
  )
}

export default Header
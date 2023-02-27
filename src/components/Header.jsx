import SearchGift from "./SearchGift"

const Header = ({ title }) => {
  return (
    <nav className="bg-slate-800 p-3 shadow-lg flex-wrap lg:flex ">
      <h1 className="text-center basis-1/4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl">{ title }</h1>
      <SearchGift />
    </nav>
  )
}

export default Header
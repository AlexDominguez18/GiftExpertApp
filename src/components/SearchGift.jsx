import SearchIcon from "./SearchIcon";

const SearchGift = () => {
  return (
    <div className="basis-3/4 relative">
      <SearchIcon />
      <input
        className="pl-10 py-2 text-slate-100 bg-slate-700 w-1/4 rounded-full caret-slate-100 focus:outline-none focus:w-full duration-500"
        type="text"
        placeholder="Buscar gift.."
      />
    </div>
  )
}

export default SearchGift;

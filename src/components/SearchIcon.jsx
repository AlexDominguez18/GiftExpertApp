const SearchIcon = () => {
  return (
    <span className="absolute inset-y-0 lef-0 flex items-center pl-2">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white p-1"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </span>
  )
}

export { SearchIcon }
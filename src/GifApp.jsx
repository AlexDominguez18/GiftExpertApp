import { FilterContextProvider } from './context/FilterContext'
import { Header, Categories, GifGrid } from './components'

const GifApp = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <FilterContextProvider>
        <Header title="GifExpertApp" />
        <Categories />
        <GifGrid />
      </FilterContextProvider>
    </div>
  )
}

export default GifApp
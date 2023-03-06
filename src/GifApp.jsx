import Header from './components/Header'
import Categories from './components/Categories'
import GifGrid from './components/GifGrid'

const GifApp = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header title="GifExpertApp" />
      <Categories />
      <GifGrid filter="One piece" />
    </div>
  )
}

export default GifApp
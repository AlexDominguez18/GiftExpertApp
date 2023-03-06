import Header from './components/Header'
import { Categories, GifGrid } from './components'

const GifApp = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header title="GifExpertApp" />
      <Categories />
      <GifGrid filter="One piece" />
    </div>
  )
}

export { GifApp }
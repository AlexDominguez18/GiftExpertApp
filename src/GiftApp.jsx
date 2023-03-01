import Header from './components/Header'
import Categories from './components/Categories'

const GiftApp = () => {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Header title="GiftExpertApp" />
      <Categories />
    </div>
  )
}

export default GiftApp
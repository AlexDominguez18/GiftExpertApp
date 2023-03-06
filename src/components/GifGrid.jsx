import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem, Spinner } from './'

const GifGrid = () => {
  const { filter } = useContext(FilterContext)
  const { images, isLoading } = useFetchGifs(filter)

  return (
    <div className={ gridStyles }>
      <div className="text-center">
        <h3 className="text-3xl text-slate-900">{filter} GIF's</h3>
      </div>
      <div className={ gridBodyStyles }>
      {
        isLoading 
          ? <Spinner /> 
          : images.map( image => <GifItem key={image.id} {... image} />)
      }
      </div>
    </div>
  )
}

const gridStyles = `
  container
  p-5
  mt-5
  border border-solid
  bg-slate-50
  rounded-lg
  shadow-lg
  lg:mx-auto
`

const gridBodyStyles = `
  mt-5
  flex
  flex-wrap
  justify-center
`

export { GifGrid }
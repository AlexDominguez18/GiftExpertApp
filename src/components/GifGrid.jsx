import { useState, useEffect } from 'react'
import GifItem from './GifItem'
import fetchGifs from "../helpers/fetchGifs"

const GifGrid = ({ filter }) => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    const gifs = await fetchGifs(filter)
    setImages(gifs)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className={ gridStyles }>
      <div className="text-center">
        <h3 className="text-3xl text-slate-900">{filter} GIF's</h3>
      </div>
      <div className={ gridBodyStyles }>
      {
        images.map( image => <GifItem key={image.id} {... image} />)
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

export default GifGrid
import { useState, useEffect } from 'react'
import fetchGifs from '../helpers/fetchGifs'

const useFetchGifs = (filter) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const gifs = await fetchGifs(filter)
    setImages(gifs)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)  
    getImages()
  }, [filter])

  return { images, isLoading }
}

export { useFetchGifs }
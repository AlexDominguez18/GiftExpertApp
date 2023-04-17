import { env } from '../helpers/environment'

const GIF_API_KEY = env('GIF_API_KEY')
const GIF_API_URL = env('GIF_API_URL')


const fetchGifs = async (filter) => {
  const url = `${GIF_API_URL}/search?api_key=${GIF_API_KEY}&q=${filter}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))

  return gifs
}

export default fetchGifs

import { fetchGifs } from "../../src/helpers/fetchGifs"

describe('fetchGifs module tests', () => {
  
  test('Should return an array with gifs data', async () => {
    const gifs = await fetchGifs('Naruto');
    expect( gifs.length ).toBeGreaterThan(0)
  })

})

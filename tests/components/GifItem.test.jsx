import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem Component Tests', () => {
  const title = "Title"
  const url = "https://example.com/image.jpgw"

  test('Should match the snapshot', () => {
    const { container } = render(<GifItem title={ title } url={ url } />)
    expect( container ).toMatchSnapshot()
  })

  test('Should show image with URL and ALT', () => {
    render(<GifItem title={ title } url={ url } />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Should show the title', () => {
    render(<GifItem title={ title } url={ url } />)
    expect(screen.getByText(title)).toBeTruthy()
  })

})

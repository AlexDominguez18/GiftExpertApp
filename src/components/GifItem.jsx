import PropTypes from "prop-types"

const GifItem = ({ id, title, url }) => {
  return (
    <div className={gifItemStyles}>
      <img className="h-52" src={ url } alt={ title } />
      <p className="text-center">{ title }</p>
    </div>
 ) 
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const gifItemStyles = `
  p-2
  m-2
  border border-solid
  bg-slate-100
  rounded-lg
  shadow-lg
  flex
  flex-col
`

export { GifItem }

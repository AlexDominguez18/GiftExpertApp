import React from 'react'
import ReactDOM from 'react-dom/client'
import GifApp from './GifApp'
import './styles.css'

document.title = 'GifExpertApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>,
)

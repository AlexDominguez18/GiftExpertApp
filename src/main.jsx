import React from 'react'
import ReactDOM from 'react-dom/client'
import GiftApp from './GiftApp'
import './styles.css'

document.title = 'GiftExpertApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftApp />
  </React.StrictMode>,
)

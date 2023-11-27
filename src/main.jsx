import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchComponent from './SearchComponent'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchComponent onSearch={handleSearch} />
  </React.StrictMode>,
)

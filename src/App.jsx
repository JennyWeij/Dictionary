import { useState } from 'react'
import './App.css'
import SearchComponent from './SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SearchComponent/>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Valyuta from './components/valyuta/Valyuta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Valyuta/>
    </>
  )
}

export default App

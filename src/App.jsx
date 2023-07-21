import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hola from './components/hola'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hola></Hola>
    </>
  )
}

export default App

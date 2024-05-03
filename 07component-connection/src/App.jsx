import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-5xl font-bold'>Component Connections</h1>
        <Grandpa />
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Products from './Products'


function App() {
  var [count, setCount] = useState(10);
  return (
    <>
      <div className='w-full h-screen bg-zinc-900 text-white'>
        <h1>{count}</h1>
        <button onClick={() => setCount(prevCounter => prevCounter + 1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>click</button>
        <Products naam='item price' data={{ age: 25, name: 'May' }} />
      </div>
    </>
  )
}

export default App
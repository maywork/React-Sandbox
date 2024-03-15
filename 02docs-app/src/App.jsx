import React from 'react'
import Background from './components/Background'

function App() {
  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Background />
        <div className='w-full h-full bg-sky-800'></div>
      </div>
    </>
  )
}

export default App
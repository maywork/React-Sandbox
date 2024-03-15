import React from 'react'
import Background from './components/Background'

function App() {
  return (
    <>
      <div>
        <div className='relative w-full h-screen bg-zinc-800'>
          <Background />
          <div className='fixed top-0 left-0 z-[3] w-full h-full'></div>
        </div>
      </div>
    </>
  )
}

export default App
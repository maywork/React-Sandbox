import React, { useState } from 'react'

function Products({ naam, data }) {
  const [state, seState] = useState(false);
  return (
    <div className='text-white'>
      <div className='w-full h-60 bg-zinc-800 px-6 py-8'>
        <h1>{naam}</h1>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        <h1 className={`w-60 text-center rounded-md ${state === false ? "bg-red-500" : "bg-blue-500"}`}>{state === false ? 'false' : 'true'}</h1>
        <button className='w-20 my-2 text-center py-2 border rounded-md' onClick={() => seState(!state)}>change</button>
      </div>
    </div>
  )
}

export default Products
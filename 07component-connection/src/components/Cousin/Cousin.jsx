import React from 'react'

function Cousin({ name }) {
  return (
    <div className='border border-orange-200 m-3 p-4 rounded-xl'>
      <h2>Cousin</h2>
      <p>{name}</p>
    </div>
  )
}

export default Cousin
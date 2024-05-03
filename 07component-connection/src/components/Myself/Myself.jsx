import React from 'react'
import PlusOne from '../PlusOne/PlusOne'

function Myself({ asset }) {
  return (
    <div className='border border-orange-200 m-3 p-4 rounded-xl'>
      <h2>Myself</h2>
      <div>
        <PlusOne asset={asset} />
      </div>
    </div>
  )
}

export default Myself
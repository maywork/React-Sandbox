import React from 'react'
import Myself from '../Myself/Myself'
import Bro from '../Bro/Bro'
import Sis from '../Sis/Sis'

function Dad() {
  return (
    <div className='border border-orange-200 m-3 p-4 rounded-xl'>
      <h2 className=''>Dad</h2>
      <div className=''>
        <Myself />
        <Bro />
        <Sis />
      </div>
    </div>
  )
}

export default Dad
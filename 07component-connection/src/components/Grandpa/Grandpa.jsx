import React from 'react'
import Dad from '../Dad/Dad'
import Uncle from '../Uncle/Uncle'
import Aunt from '../Aunt/Aunt'

function Grandpa() {
  const asset = 'diamond ring'

  return (
    <div className='justify-center m-5 border border-orange-200 p-4 rounded-xl'>
      <h2 className='text-5xl font-semibold'>Grandpa</h2>
      <div className='flex justify-center'>
        <Uncle />
        <Dad asset={asset} />
        <Aunt />
      </div>
    </div>
  )
}

export default Grandpa
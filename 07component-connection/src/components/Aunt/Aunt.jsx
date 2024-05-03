import React from 'react'
import Cousin from '../Cousin/Cousin'

function Aunt() {
  return (
    <div className='border border-orange-200 m-3 p-4 rounded-lg'>
      <h2>Aunt</h2>
      <Cousin name={'Naim'} />
      <Cousin name={'Saif'} />
    </div>
  )
}

export default Aunt
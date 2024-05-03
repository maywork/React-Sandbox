import React from 'react'
import Cousin from '../Cousin/Cousin'

function Uncle() {
  return (
    <div className='border border-orange-200 m-3 p-4 rounded-lg'>
      <h2>Uncle</h2>
      <div className=''>
        <Cousin name={'Ruposh'} />
        <Cousin name={'Nuha'} />
        <Cousin name={'Abdullah'} />
      </div>
    </div>

  )
}

export default Uncle
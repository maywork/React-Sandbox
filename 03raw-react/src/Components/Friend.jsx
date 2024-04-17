import React from 'react'

function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className='border border-purple-700 rounded-lg py-2'>
      <h3 className='font-bold text-2xl'>Name: <span className='text-purple-600'>{name}</span></h3>
      <p>Email: <span className='text-gray-600'>{email}</span></p>
    </div>
  )
}

export default Friend
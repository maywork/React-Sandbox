import React, { useEffect, useState } from 'react'
import Friend from './Friend'

function Friends() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setFriends(data))
  }, [])

  return (
    <div className='text-center'>
      <h3 className='text-cyan-400 font-medium text-4xl border-2 rounded-md py-2 px-2'>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend} />)
      }
    </div>

  )
}

export default Friends
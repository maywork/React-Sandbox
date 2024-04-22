import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Home() {
  return (
    <div>
      <Header />
      <h2>This is the Home</h2>
      <Outlet />
    </div>
  )
}

export default Home
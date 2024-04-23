import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <h2>This is the Home</h2>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
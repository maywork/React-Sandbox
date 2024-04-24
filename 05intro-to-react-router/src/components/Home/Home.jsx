import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      {/* <h2>Under this is the Outlet</h2> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
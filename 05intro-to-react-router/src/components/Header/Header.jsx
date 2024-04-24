import { Link, NavLink } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <div>
      {/* <h3>My WebSite</h3> */}
      <h2>Navbar</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  )
}

export default Header
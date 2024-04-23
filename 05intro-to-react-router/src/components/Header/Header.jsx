import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <span>My WebSite: </span>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  )
}

export default Header
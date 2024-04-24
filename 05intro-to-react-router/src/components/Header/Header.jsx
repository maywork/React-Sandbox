import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <div>
      {/* <h3>My WebSite</h3> */}
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  )
}

export default Header
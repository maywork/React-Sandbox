import { Link } from "react-router-dom"

function User({ user }) {
  const { id, name, email, phone } = user
  const userStyle = {
    border: '2px solid yellow',
    padding: '15px',
    borderRadius: '15px'
  }

  return (
    <div style={userStyle}>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <br />
      <Link to={`/user/${id}`}>
        <button>Click me</button>
      </Link>
    </div>
  )
}

export default User
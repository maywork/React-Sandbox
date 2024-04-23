import { useLoaderData } from "react-router-dom"
import User from "../User/User";
import './Users.css'

function Users() {

  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h2>Our Users: {users.length} </h2>
      <p>Our Users are our first priority</p>
      <div className="users">
        {
          users.map(user => <User key={user.id} user={user} />)
        }
      </div>
    </div>

  )
}

export default Users
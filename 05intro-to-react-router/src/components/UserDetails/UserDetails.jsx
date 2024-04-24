import { useLoaderData } from 'react-router-dom'

function UserDetails() {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Username: {name}</h2>
      <p>Visit us: {website}</p>
    </div>
  )
}

export default UserDetails
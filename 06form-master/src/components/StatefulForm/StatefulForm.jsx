import React, { useState } from 'react'

function StatefulForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be 6 character or longer!')
    } else {
      setError('')
      console.log(name, email, password);
    }
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          value={name}
          onChange={handleNameChange}
          className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your name" type="text" name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your email" type="email" name="email" />
        <br />
        <input
          onChange={handlePassword}
          className='rounded-md p-1 mb-2 text-center' placeholder="Enter password" type="password" name="password" required />
        <br />
        <br />
        <button>
          <input type="submit" value="Submit" />
        </button>
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  )
}

export default StatefulForm
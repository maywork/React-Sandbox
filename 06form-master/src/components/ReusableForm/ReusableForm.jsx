import React from 'react'

function ReusableForm({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) {

  const handLocalSubmit = e => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    handleSubmit(data)
  }

  return (
    <div>
      {children}
      <form onSubmit={handLocalSubmit} className="p-4">
        <input className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your name" type="text" name="name" />
        <br />
        <input className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your email" type="email" name="email" />
        <br />
        <input className='rounded-md p-1 mb-2 text-center' placeholder="Enter password" type="password" name="password" required />
        <br />
        <button>
          <input type="submit" value={submitBtnText} />
        </button>
      </form>
    </div>
  )
}

export default ReusableForm
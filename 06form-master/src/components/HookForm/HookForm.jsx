import React from 'react'
import useInputState from '../../hooks/useInputState';

function HookForm() {

  const [name, handleNameChange] = useInputState('Rojo')

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data, ', name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input value={name} onChange={handleNameChange} className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your name" type="text" name="name" />
        <br />
        <input className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your email" type="email" name="email" />
        <br />
        <input className='rounded-md p-1 mb-2 text-center' placeholder="Enter password" type="password" name="password" required />
        <br />
        <button>
          <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  )
}

export default HookForm
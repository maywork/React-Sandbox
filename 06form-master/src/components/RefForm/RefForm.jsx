import { useRef } from "react"

function RefForm() {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          ref={nameRef}
          className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your name" type="text" name="name" />
        <br />
        <input
          ref={emailRef}
          className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your email" type="email" name="email" />
        <br />
        <input
          ref={passwordRef}
          className='rounded-md p-1 mb-2 text-center' placeholder="Enter password" type="password" name="password" required />
        <br />
        <br />
        <button>
          <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  )
}

export default RefForm

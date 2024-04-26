
function Form() {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input className="rounded-md p-1 mb-2 text-center" placeholder="Please, enter your name" type="text" name="name" />
        <br />
        <input className="rounded-md p-1 text-center" placeholder="Please, enter your email" type="email" name="email" />
        <input placeholder="Please, enter your number" type="number" name="phone" />
        <br />
        <br />
        <button>
          <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  )
}

export default Form
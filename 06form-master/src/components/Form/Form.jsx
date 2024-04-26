
function Form() {
  return (
    <div>
      <form className="p-4">
        <input className="rounded-md p-1 text-center" placeholder="Please, enter your email" type="text" />
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
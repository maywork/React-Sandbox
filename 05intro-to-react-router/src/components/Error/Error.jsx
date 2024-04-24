import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError();
  const { status, statusText, message } = error

  return (
    <div>
      <h1>{status}</h1>
      <p><i>{statusText || message}</i></p>
      <h2>Oops! an unexpected error has occurred!</h2>
    </div>
  )
}

export default Error
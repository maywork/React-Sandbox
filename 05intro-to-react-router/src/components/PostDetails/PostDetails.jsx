import { useLoaderData, useNavigate } from 'react-router-dom'

function PostDetails() {
  const post = useLoaderData()
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <h3>Post Number: {id}</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default PostDetails
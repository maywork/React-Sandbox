import { useNavigate } from 'react-router-dom';

function Post({ post }) {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: '2px solid purple',
    padding: '15px',
    borderRadius: '15px'
  }

  const handleReadMore = () => {
    navigate(`/post/${id}`);
  }

  return (
    <div style={postStyle}>
      <h3>Post: {id}</h3>
      <h4>{title}</h4>
      <p><small>{body}</small></p>
      <button onClick={handleReadMore}>Read More</button>
    </div>
  )
}

export default Post
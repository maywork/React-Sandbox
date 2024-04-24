import { useLoaderData } from 'react-router-dom'
import './Posts.css'
import Post from '../Post/Post';

function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <h3>This is post number: {posts.length}</h3>
      <div className='posts'>
        {
          posts.map(post => <Post key={post.id} post={post} />)
        }
      </div>
    </div>
  )
}

export default Posts
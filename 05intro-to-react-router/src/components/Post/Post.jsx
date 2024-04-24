import React from 'react'

function Post({ post }) {
  const { id, title, body } = post;
  const postStyle = {
    border: '2px solid purple',
    padding: '15px',
    borderRadius: '15px'
  }
  return (
    <div style={postStyle}>
      <h3>Post: {id}</h3>
      <h4>{title}</h4>
      <p><small>{body}</small></p>
    </div>
  )
}

export default Post
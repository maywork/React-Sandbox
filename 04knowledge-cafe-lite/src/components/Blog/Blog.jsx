import React from 'react'

function Blog({ blog }) {
  const { title, cover_img } = blog;

  return (
    <div>
      <img src={cover_img} alt="" />
      <h2 className="text-3xl">{title}</h2>
    </div>
  )
}

export default Blog
import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

function Blogs({ handleAddToBookmark, isBookmarked }) {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className='md:w-2/3'>
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {
        blogs.map(blog => <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          isBookmarked={isBookmarked}
        />)
      }
    </div>
  )
}

export default Blogs
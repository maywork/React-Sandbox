import { useState } from "react";
import { BsBookmarks } from "react-icons/bs";

function Blog({ blog, handleAddToBookmark }) {
  const { title, cover_img, author, author_img, posted_date, reading_time, hashtags } = blog;


  return (
    <div className='mb-20'>
      <img className='w-10/12' src={cover_img} alt="" />
      <div className='flex justify-between m-4'>
        <div className='flex gap-4'>
          <img className='w-16' src={author_img} alt="" />
          <div>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} read</span>
          <button
            className='ml-2 text-gray-600'
            onClick={() => handleAddToBookmark(blog)}
          ><BsBookmarks /></button>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
        }
      </p>
    </div>
  )
}

export default Blog
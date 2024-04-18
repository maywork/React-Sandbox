import React from 'react'

function Blog({ blog }) {
  const { title, cover_img, author, author_img, posted_date, reading_time, hashtags } = blog;

  return (
    <div>
      <img src={cover_img} alt="" />
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img className='w-16' src={author_img} alt="" />
          <div>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} read</span>
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
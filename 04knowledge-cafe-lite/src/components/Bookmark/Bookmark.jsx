import React from 'react'

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className='bg-slate-300 p-4 my-4 rounded-md'>
      <h3 className="text-2xl">{title}</h3>
    </div>
  )
}

export default Bookmark
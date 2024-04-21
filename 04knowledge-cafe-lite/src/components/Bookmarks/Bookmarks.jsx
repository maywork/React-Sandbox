import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

function Bookmarks({ bookmarks }) {
  return (
    <div className='md:w-1/3 bg-purple-100 p-4 m-4 rounded-md'>
      <h3 className="text-3xl py-2 border-b border-purple-600 text-purple-950">Bookmarked Blogs: {bookmarks.length}</h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
      }
    </div>
  )
}

export default Bookmarks
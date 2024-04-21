import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    console.log('marking as read', time);
  }

  return (
    <>
      <div className='exo-regular p-4 mx-4'>
        <Header />
        <div className='md:flex'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
    </>
  )
}

export default App

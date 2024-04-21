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
    console.log(time);
    const getTime = time.substring(0, 2)
    setReadingTime(readingTime + Number(getTime))
  }

  return (
    <>
      <div className='exo-regular p-4 mx-4'>
        <Header />
        <div className='md:flex'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  )
}

export default App

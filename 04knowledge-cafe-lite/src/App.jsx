import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='exo-regular p-4 mx-4'>
        <Header />
        <div className='md:flex'>
          <Blogs />
          <Bookmarks />
        </div>
      </div>
    </>
  )
}

export default App

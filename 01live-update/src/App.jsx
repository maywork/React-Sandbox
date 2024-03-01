import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("Mayesha's Live Text Update!")


  return (
    <>
      <div>
        <h1 className='text-gray-400 font-bold underline'>Live Text Update App</h1>
        <br />
        {/* <form onSubmit={(e) => {
          e.preventDefault()
          setInputValue(e.target.textField.value)
          e.target.reset()
        }}>
          <input name='textField' className='py-2 px-10 rounded-full border-b border-purple-400' type="text" placeholder='enter text...'
          />
          <br />
          <br />
          <button
            type='submit'
            className='rounded-full bg-purple-400 bg-opacity-25 text-purple-400 border-b border-b-purple-400 border-r-purple-400'
          >
            Update
          </button>
        </form> */}
        <br />
        <form onSubmit={(e) => {
          e.preventDefault()
          setInputValue(e.target.textField.value)
          e.target.reset()
        }}>
          <input name='textField' className='py-2 px-10 rounded-full border-b border-purple-400' type="text" placeholder='enter text...'
          />
          <br />
          <br />
          <button
            type='submit'
            className='rounded-full bg-purple-400 bg-opacity-25 text-purple-400 border-b border-b-purple-400 border-r-purple-400'
          >
            Update
          </button>
        </form>

        <br />

        <div className='text-2xl font-medium text-purple-400'>
          {inputValue}
        </div>
      </div>
    </>
  )
}

export default App

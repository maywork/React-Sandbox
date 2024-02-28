import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("Mayesha's Live Text Update!")
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <h1>{count}</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          setInputValue(e.target.textField.value)
          e.target.reset()
        }}>
          <input name='textField' className='py-2 px-10 rounded-full border-b border-purple-400' type="text" placeholder='enter text...'
          />

          <button
            type='submit'
            className='rounded-full text-purple-400'
          >
            Update</button>
        </form>
        <br />
        <br />

        <br />
        <br />
        <div className='text-2xl font-medium text-purple-400'>
          {inputValue}
        </div>
      </div>
    </>
  )
}

export default App

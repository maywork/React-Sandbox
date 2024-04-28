import { useState } from "react"

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = v => {
    setValue(v)
  }

  return [value, handleChange]
}

export default useInputState;
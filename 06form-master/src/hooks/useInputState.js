import { useState } from "react"

const useInputState = (defaultValue) => {
  const [value, setValue] = useState(defaultValue || "")

  const handleChange = e => {
    const val = e.target.value
    if (val === undefined) {
      setValue('');
    } else {
      setValue(val);
    }
  }

  return [value, handleChange];
}

export default useInputState;
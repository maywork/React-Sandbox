import { useState } from "react"

const useInputState = (defaultValue) => {
  const [value, setValue] = useState(defaultValue || "")

  const onChange = e => {
    setValue(e.target.value);
  }

  // const handleChange = e => {
  //   const val = e.target.value
  //   if (val === undefined) {
  //     setValue('');
  //   } else {
  //     setValue(val);
  //   }
  // }
  // return [value, handleChange];

  return {
    value,
    onChange
  }

}

export default useInputState;
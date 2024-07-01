import { useEffect, useState } from "react"

export default function InputGroupItem({ labelText, investmentArea }) {
  const [inputValue, setInputValue] = useState(0)

  function handleInputChange(ev) {
    setInputValue((prev) => (prev = ev.target.value))
  }

  useEffect(() => {
    investmentArea(parseInt(inputValue))
  }, [inputValue])

  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input type="number" onChange={handleInputChange} value={inputValue} />
    </div>
  )
}

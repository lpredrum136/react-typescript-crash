import React, { useState, ChangeEvent } from 'react'

const InputText = () => {
  const [message, setMessage] = useState<string>('')

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your message'
        value={message}
        onChange={handleTextChange}
      />
      <p>Your message: {message}</p>
    </div>
  )
}

export default InputText

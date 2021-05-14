import React from 'react'

export const ControlledNoExclamations = () => {
  const [email, setEmail] = React.useState('')

  const handleChange = (e) => {
    setEmail(e.target.value.replace(/!/g, 'bang'))
  }
  return (
    <div>
      <label htmlFor="email">Email address</label>
      <input id="email" value={email} onChange={handleChange} />
    </div>
  )
}

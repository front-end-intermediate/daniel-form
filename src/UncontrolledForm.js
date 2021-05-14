import React, { useRef } from 'react'

export const UncontrolledForm = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    console.log('name', nameRef.current.value)
    console.log('email', emailRef.current.value)
    console.log('message', messageRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" ref={messageRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

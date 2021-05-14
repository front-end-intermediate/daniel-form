import React from 'react'
import './styles.css'
import { Form } from './Form'
import { UncontrolledForm } from './UncontrolledForm'
import { ControlledNoExclamations } from './ControlledNoExclamations'

export const App = () => {
  return (
    <>
      <h1>Forms</h1>
      <h2>Controlled</h2>
      <Form />
      <h2>Uncontrolled</h2>
      {/* <UncontrolledForm /> */}
      <h2>No Exclamations</h2>
      {/* <ControlledNoExclamations /> */}
    </>
  )
}

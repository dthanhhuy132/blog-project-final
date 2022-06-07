import React from 'react'
import InputForm from '../common/InputForm'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <>
      <InputForm title="Username" />
      <InputForm title="Password" inputType="password" />
    </>
  )
}

export default LoginForm
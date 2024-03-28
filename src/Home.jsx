import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is home page. </h1>
      <Button title='Register' />
      <Button title='Login' />
      <Button />
    </div>
  )
}

export default Home

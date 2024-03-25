import React, { useState } from 'react'

function Contact() {
  // const state = useState(0)
  const [number, setNumber] = useState(0)
  // const firstItem = state[0]
  // const secondItem = state[1]
  // console.log(firstItem,secondItem)
  const inCount = () => {
    setNumber(number +1)
  }
  const decCount = () => {
    if(number!=0){
      setNumber(number-1)
    }
  }

  return (
    <div>
      <h1>This is Contact Page</h1>
      <div>{number}</div>
      <button onClick={inCount}>+</button>
      <button onClick={decCount}>-</button>
      <div>
      </div>
    </div>
  )
}


export default Contact

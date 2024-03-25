import React, {useEffect,useState} from 'react'

function UseEffect() {
    const[count,setCount]=useState(0)
    //type 1 of useEffect
    // useEffect( () => {
    //     console.log("I am from useEffect.")
    // },[])
    const inCount = () => {
        setCount(count +1)
      }
    //type 2 of useEffect
    useEffect(()=>{
        console.log("useEffect triggered")
    },[count])

    //type 3 of useEffect
    useEffect(()=>{
        console.log("UseEffect triggered")
    })
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={inCount}>+</button>
    </div>
  )
}

export default UseEffect

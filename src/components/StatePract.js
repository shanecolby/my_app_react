import React, { useState } from "react"

function StatePract() {
  const [name] = useState("Shane")
  const [age] = useState("30")
  const [count, setCount] = useState(0)

  function addOne() {
    setCount(prevCount => prevCount + 1)
  }

  function subOne() {
    setCount(prevCount => prevCount - 1)
  }

  function clear() {
    setCount(prevCount => prevCount - prevCount)
  }




  return (
    <div>
      <h1>Your name is {name}</h1>
      <h1>You are {age} years old</h1>
      <h1>{count}</h1>
      <button onClick={addOne}>Add One</button>
      <button onClick={subOne}>Subtract One</button>
      <button onClick={clear}>CLEAR</button>
    </div>
  )
}



export default StatePract
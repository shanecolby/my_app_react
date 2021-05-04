import React, { useState } from "react"

function StatePract() {
  const [name] = useState("Shane")
  const [age] = useState("30")

  return (
    <div>
      <h1>Your name is {name}</h1>
      <h1>You are {age} years old</h1>
    </div>
  )
}



export default StatePract
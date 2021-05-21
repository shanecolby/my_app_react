import React, { useState } from "react"

function FormFunctional() {
  const [firstName, setfirstName] = useState("")
  const [lastName, lasttName] = useState("")


  // function handleChange(event) {
  //   const { name, value } = event.target



  // }

  const handleClick = (event) => {
    const { name, value } = event.target



    // const boardCopy = [...board];
    // // If user click an occupied square or if game is won, return
    // if (winner || boardCopy[i]) return

  }



  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"

      />

      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"

      />
    </form>
  )
}



export default FormFunctional
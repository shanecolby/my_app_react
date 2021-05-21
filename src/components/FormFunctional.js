import React, { useState } from "react"
import FormPract from "./FormPract"

function FormFunctional() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")


  // function handleChange(event) {
  //   const { name, value } = event.target



  // }

  // const handleChange = (event) => {
  //   const { name, value } = event.target




  //   // const boardCopy = [...board];
  //   // // If user click an occupied square or if game is won, return
  //   // if (winner || boardCopy[i]) return

  // }



  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={e => setfirstName(e.target.value)}

      />

      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={e => setlastName(e.target.value)}

      />

      <textarea
        value={"Some default value"}

      />


    </form>
  )
}



export default FormFunctional
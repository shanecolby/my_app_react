import React, { useState } from "react"
import FormPract from "./FormPract"

function FormFunctional() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

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
    <form style={{ textAlign: "center", fontFamily: "cursive" }}>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={e => setfirstName(e.target.value)}

      />
      <br />

      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={e => setlastName(e.target.value)}

      />
      <br />

      <input
        type="text"
        name="age"
        value={age}
        placeholder="Age"
        onChange={e => setAge(e.target.value)}
      />

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={e => setGender(e.target.value)}
        /> Male

      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={e => setGender(e.target.value)}
        /> Female

      </label>







    </form>
  )
}



export default FormFunctional
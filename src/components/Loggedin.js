import React, { useState } from "react"

function Loggedin() {
  const [loggedIn, setLoggedIn] = useState("false")



  return (
    <div>
      <h1></h1>
      <p></p>
      <button>Log in</button>
    </div>
  )
}

// class Loggedin extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     let wordDisplay
//     if (this.state.isLoggedIn) {
//       wordDisplay = "in"
//     } else {
//       wordDisplay = "out"
//     }
//     let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
//     return (
//       <div style={{ margin: "auto", width: 300, padding: 10 }}>
//         <h1 onClick={() => console.log("clicked")} style={{ textAlign: "center" }}>You are currently logged {wordDisplay} </h1>
//         <p></p>
//         <button
//           style={{
//             color: "goldenrod",
//             backgroundColor: "navy",
//             outlineColor: "white"
//           }}
//           className="button"
//           onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     )
//   }
// }

export default Loggedin
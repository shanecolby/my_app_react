import React from "react"

class Loggedin extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    let wordDisplay
    if (this.state.isLoggedIn) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>You are currently logged {wordDisplay} </h1>
      </div>
    )
  }
}

export default Loggedin
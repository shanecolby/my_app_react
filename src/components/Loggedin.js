import React from "react"

class Loggedin extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let wordDisplay
    if (this.state.isLoggedIn) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
    return (
      <div style={{ margin: "auto", width: 300, padding: 10 }}>
        <h1 onClick={() => console.log("clicked")} style={{ textAlign: "center" }}>You are currently logged {wordDisplay} </h1>
        <p></p>
        <button className="button" onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default Loggedin
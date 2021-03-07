import React from "react"

class ButtonNumber extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.clickTimesTwo = this.clickTimesTwo.bind(this)
    this.divideByTwo = this.divideByTwo.bind(this)
    this.clearCount = this.clearCount.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }

    })
  }

  clickTimesTwo() {
    this.setState((prevState) => {
      return {
        count: prevState.count * 2
      }
    })
  }

  divideByTwo() {
    this.setState((prevState) => {
      return {
        count: prevState.count / 2
      }
    })
  }

  clearCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - prevState.count
      }
    })
  }

  render() {

    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Number + 1</button>
        <button onClick={this.clickTimesTwo}>Number * 2</button>
        <button onClick={this.divideByTwo}>Number / 2</button>
        <br />
        <button onClick={this.clearCount}>CLEAR</button>
      </div>
    )
  }
}

export default ButtonNumber



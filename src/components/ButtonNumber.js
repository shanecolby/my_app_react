import React from "react"

class ButtonNumber extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.clickTimesTwo = this.clickTimesTwo.bind(this)
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
  render() {

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Number + 1</button>
        <button onClick={this.clickTimesTwo}>Number * 2</button>
        <button>Number / 2</button>
      </div>
    )
  }
}

export default ButtonNumber
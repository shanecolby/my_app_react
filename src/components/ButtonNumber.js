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
        count: prevState.count + 1,

      }

    })
  }

  clickTimesTwo() {
    this.setState((prevState) => {
      return {
        count: prevState.count * 5,

      }
    })
  }

  divideByTwo() {
    this.setState((prevState) => {
      return {
        count: prevState.count / 5,

      }
    })
  }

  clearCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - prevState.count,

      }
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count < this.state.count) {
      const newColor = "purple"
      this.setState({ color: newColor })
    } if (prevState.count > this.state.count) {
      const diffColor = "red"
      this.setState({ color: diffColor })
    }
  }

  render() {

    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.handleClick} style={{ color: "green" }}>Number + 1</button>
        <button onClick={this.clickTimesTwo} style={{ color: "blue" }}>Number * 2</button>
        <button onClick={this.divideByTwo} style={{ color: "red" }}>Number / 2</button>
        <br />
        <button onClick={this.clearCount}>CLEAR</button>


      </div>
    )
  }
}

export default ButtonNumber



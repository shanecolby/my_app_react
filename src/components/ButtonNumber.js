import React, { useState } from "react"

function ButtonNumber() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function addByFive() {
    setCount(prevCount => prevCount + 5)
  }

  function subtractTen() {
    setCount(prevCount => prevCount - 10)
  }

  function double() {
    setCount(prevCount => prevCount * 2)
  }

  function half() {
    setCount(prevCount => prevCount / 2)
  }

  function clear() {
    setCount(prevCount => prevCount - prevCount)
  }





  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addByFive}>Add 5</button>
      <button onClick={subtractTen}>Subtract 10</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Cut in half</button>
      <button onClick={clear}>Clear</button>
    </div>
  )

}

// class ButtonNumber extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.clickTimesTwo = this.clickTimesTwo.bind(this)
//     this.divideByTwo = this.divideByTwo.bind(this)
//     this.clearCount = this.clearCount.bind(this)
//     this.squared = this.squared.bind(this)
//   }

//   handleClick() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,

//       }

//     })
//   }

//   clickTimesTwo() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count * 5,

//       }
//     })
//   }

//   divideByTwo() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count / 5,

//       }
//     })
//   }

//   clearCount() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - prevState.count,

//       }
//     })
//   }

//   squared() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count * prevState.count,
//       }
//     })
//   }


//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count < this.state.count) {
//       const newColor = "purple"
//       this.setState({ color: newColor })
//     } if (prevState.count > this.state.count) {
//       const diffColor = "red"
//       this.setState({ color: diffColor })
//     }
//   }

//   render() {

//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
//         <button onClick={this.handleClick} style={{ color: "green" }}>Number + 1</button>
//         <button onClick={this.clickTimesTwo} style={{ color: "blue" }}>Number * 5</button>
//         <button onClick={this.divideByTwo} style={{ color: "red" }}>Number / 5</button>
//         <button onClick={this.squared} style={{ color: "turquoise" }}>Squared</button>
//         <br />
//         <button onClick={this.clearCount}>CLEAR</button>


//       </div>
//     )
//   }
// }

export default ButtonNumber



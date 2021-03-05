import React from 'react'

class ClassPract extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Shane",
      age: "30"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    )
  }
}

export default ClassPract
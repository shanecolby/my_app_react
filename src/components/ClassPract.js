import React from 'react'

class ClassPract extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Shane Colby",
      age: "30"
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h3>{this.state.age}</h3>
      </div>
    )
  }
}


export default ClassPract
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
        <h3 style={{ color: "#328475" }}>{this.state.name}</h3>
        <h3>{this.state.age}</h3>
      </div >
    )
  }
}


export default ClassPract
import React from 'react'

class ClassPract extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Shane",
      age: "30",
      country: "USA",
      math: (5 * 5),
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3 style={{ color: "#328475" }}>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Orgin: {this.state.country}</h3>
        <h3>Math: {this.state.math}</h3>
      </div >
    )
  }
}


export default ClassPract
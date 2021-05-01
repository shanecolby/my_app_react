import React, { useState } from 'react'

function ClassPract() {
  const [name, setName] = useState("Shane")
  const [age, setAge] = useState("30")
  const [origin, setOrigin] = useState("USA")
  const [math, setMath] = useState((5 * 5))




  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#328475" }}>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Orgin: {origin}</h3>
      <h3>Math: {math}</h3>
    </div >

  )
}

// class ClassPract extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "Shane",
//       age: "30",
//       country: "USA",
//       math: (5 * 50),
//     }
//   }
//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h3 style={{ color: "#328475" }}>Name: {this.state.name}</h3>
//         <h3>Age: {this.state.age}</h3>
//         <h3>Orgin: {this.state.country}</h3>
//         <h3>Math: {this.state.math}</h3>
//       </div >
//     )
//   }
// }


export default ClassPract
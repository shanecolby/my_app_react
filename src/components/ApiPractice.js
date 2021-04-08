import React from "react"

class ApiPractice extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://swapi.dev/api/people/4")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name
    const textOne = this.state.loading ? null : this.state.character.gender
    const height = this.state.loading ? null : this.state.character.height
    const mass = this.state.loading ? null : this.state.character.mass
    const skinColor = this.state.loading ? null : this.state.character.skin_color
    return (
      <div style={{ fontFamily: "cursive" }}>
        <p style={{ textAlign: "center" }}>Name: {text}</p>
        <p style={{ textAlign: "center" }}>Gender: {textOne}</p>
        <p style={{ textAlign: "center" }}>Height: {height} inches</p>
        <p style={{ textAlign: "center" }}>Weight: {mass} kg.</p>
        <p style={{ textAlign: "center" }}>Skin Color: {skinColor}</p>

      </div>
    )
  }

}

export default ApiPractice

// {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", eye_color: "blue", birth_year: "19BBY", gender: "male", homeworld: "https://swapi.co/api/planets/1/", films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"], species: ["https://swapi.co/api/species/1/"], vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"], starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"], created: "2014-12-09T13:50:51.644000Z", edited: "2014-12-20T21:17:56.891000Z", url: "https://swapi.co/api/people/1/"}
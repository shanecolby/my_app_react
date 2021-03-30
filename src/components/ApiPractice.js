import React from "react"

class ApiPractice extends React.Component {
  constructor() {
    super()
    this.state = {
      character: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.character.name}
      </div>
    )
  }

}

export default ApiPractice
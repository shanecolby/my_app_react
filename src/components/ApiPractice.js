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
    fetch("https://swapi.dev/api/people/1")
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
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  }

}

export default ApiPractice
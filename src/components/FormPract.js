import React from "react"

class FormPract extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  //BELOW SHOWS THE BEST PRACTICE TO MAKE A COPY OF [NAME,VALUE] BEFORE SETTING STATE
  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <form style={{ textAlign: "center" }}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />

        <br />

        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <br />

        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly?
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          /> Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          /> Female
        </label>

        <br />

        <h1>{this.state.firstName} {this.state.lastName}</h1>







      </form >
    )
  }
}


export default FormPract
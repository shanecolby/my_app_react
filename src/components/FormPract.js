import React from "react"

class FormPract extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      isFriendly: false,
      gender: "",
      favoriteColor: "",
      favNumber: ""
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

        <input
          type="text"
          value={this.state.age}
          name="age"
          placeholder="Age"
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

        <label>Select your favorite color</label>
        <select
          value={this.state.favoriteColor}
          onChange={this.handleChange}
          name="favoriteColor"
        >
          <option value="choose">--Choose--</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>

        </select>

        <br />

        <label>Select your favorite Number--</label>
        <select
          name="favNumber"
          value={this.state.favNumber}
          onChange={this.handleChange}
        >
          <option>Choose number below--</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>

        <br />

        <label>Click if all infomation is completed--</label>
        <br />

        <input
          type="checkbox"
          name="isComplete"
          checked={this.state.isComplete}
          onChange={this.handleChange}
        /> form completed

        <br />

        <button style={{ margin: "auto", color: "red" }}>Submit</button>


        <h1 style={{ color: "greenyellow" }}>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You selected the gender:
          <div
            style={{ color: "greenyellow" }}> {this.state.gender}
          </div>
        </h2>

        <h2>Your favorite color is <div style={{ color: "greenyellow" }}>{this.state.favoriteColor}</div></h2>
        <h3>Your favorite number is <div style={{ color: "greenyellow" }}>{this.state.favNumber}</div></h3>







      </form >
    )
  }
}


export default FormPract
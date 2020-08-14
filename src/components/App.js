import React, { Component } from "react";
import "./App.module.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: ""
  };

handleSubmit = (e) => {
e.preventDefault()
const { name } = this.state;
this.setState(prevState => ({contacts: [...prevState.contacts, {name}]}))

}

addName = (e) => {
    const { value } = e.target;
    this.setState({
        name: value,
    })
}



  render() {
      const {name} = this.state
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" value={name} name="name" onChange={this.addName}/>
          </label>

          <button type="submit">
            Add contacts
          </button>
        </form>

        <h2>Contacts</h2>
        <ul>
          <li id={uuidv4()}  name="name" >
            {this.state.name}
          </li>
        </ul>
      </>
    );
  }
}

export default App;

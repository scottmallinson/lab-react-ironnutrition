import React, { Component } from 'react'

class AddFood extends Component {
  state = { 
    name: '',
    calories: '',
    image: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    // Reset the state
    this.setState({ name: '', calories: '', image: '' });  	
  };


  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;

    this.setState( { [name]: value } );
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input className="input" name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />

        <label>Calories:</label>
        <input className="input" name="calories" type="text" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

        <label>Image:</label>
        <input className="input" name="image" type="text" checked={this.state.image} onChange={(e) => this.handleChange(e)} />
        
        <button className="button" type="submit"> Submit </button>
      </form>
    )
  }
}

export default AddFood;
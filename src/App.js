import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foods: foods,
      showAddFoodForm: false,
      todaysFoods: []
    }
  };

  toggleAddFoodForm = () => {
    this.setState({ showAddFoodForm: !this.state.showAddFoodForm });
  }

  addFoodHandler = (newFood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(newFood);
    this.setState({ foods: foodCopy, showAddFoodForm: false })
  }

  searchHandler = (query) => {
    const foundFoods = this.state.foods.filter(food => food.name.includes(query));
    this.setState({ foods: foundFoods })
  }

  render() {
    return (
      <div id="root">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <Search searchQuery={this.searchHandler} />
          <div className="columns">
            <div className="column">
              { 
                this.state.foods.map( (food, index) => <FoodBox key={index} {...food} /> ) 
              }
              <button className="button" onClick={this.toggleAddFoodForm}>
                Add food
              </button>

              { this.state.showAddFoodForm ? <AddFood addFood={this.addFoodHandler} /> : null }

            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                <li>1 Pizza = 400 cal</li>
                <li>2 Salad = 300 cal</li>
              </ul>
              <strong>Total: 700 cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

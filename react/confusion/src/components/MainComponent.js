import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent'

class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES,
    };
  }
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
  }
  render() {
    return(
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishID)=>this.onDishSelect(dishID)}/>
      <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
    </div>
  )};
}

export default Main;
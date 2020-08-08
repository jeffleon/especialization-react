import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent'
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish})
    }
    sendData(dish){
        if (dish != null){
            return(
                <Dishdetail dishSelected={dish}/>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    renderDish(dish){
        if (dish != null){
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                            <CardText>{dish.description}</CardText>  
                        </CardBody>
                    </Card>
                </div>               
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    render (){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg wodth="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                   {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                    {this.sendData(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
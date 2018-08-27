import React, { Component } from 'react';
import "./ShoppingCart.css";
import request from 'superagent';
import CardItem from "./CardItem"

class ShoppingCart extends Component{
	constructor(props){
		super(props)
		this.state = {
			push:false,
			cart:[],
			/*item:[this.props.cartList]*/
		}
		/*console.log(props)*/
	}

	changeState(){
		console.log(this.state.push)
		this.setState(prevState =>({
			push:!this.state.push
		}))
	}

	renderCardItems(){
		return this.props.cartList.map(function(id,index){
			return <CardItem id={id} key={index}/>
		})}

	render(){
		
		return(
			<div className= {this.props.check ?  "shopping__div" : "shopping__div__close"} >
				<div className="close__cart">
						<button 
						className="x__cart"
						onClick={ this.props.changePush}

						> &times;</button>
						<div className="head__cart">
							<h3 className="head__cart">Your Cart</h3>
						</div>
				</div>

				<div>
					{this.renderCardItems()}
				</div>

		{/*		{ this.props.cartList.map((item,index) => { 
					return(
						
						);
				 })}*/}
				

				
				
			</div>
		);
	}
}

export default ShoppingCart;
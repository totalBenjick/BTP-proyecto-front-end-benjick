import React, { Component } from 'react';
import request from 'superagent';

class CardItem extends Component{
	constructor(props){
		super()
		this.state={
			image:"",
			name:"",
			price:"",
			ultimate:[]
		}

	}

	componentDidMount() {
	this.fetchApi();
	
  	}

	fetchApi = () =>{
	 const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/${this.props.id}`
		request
			.get(ENDPOINT)
			.then(response=> {
				this.setState({
					image:response.body.imageLink,
					name:response.body.item,
					price:response.body.price,
					ultimate:response.body,    
					
				})		
				
			});
	
	}


	render(){
		console.log(this.state.ultimate)
		return(
	
			<div className="item__cart" >
					<div>
						<button className="suprime__item"> &times;</button>
					</div>
					<div>
						<img src={this.state.image} alt="x" className="img__cart" />
					</div>
					<div>
						<p className="text__cart">{this.state.name}</p>
					</div>
					<div>
						<p className="price__cart"> $  {this.state.price}</p>
					</div>

				</div>
	

		);
	}	
}

export default CardItem;
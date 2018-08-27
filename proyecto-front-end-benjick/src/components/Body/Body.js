import React, {Component} from "react"
import "./Body.css"
import request from 'superagent';

class Body extends Component{
	constructor(props){
		super(props);
		this.state = {
			products:[]
		}
	}
	componentDidMount() {
	this.fetchApi();
  	}
	fetchApi = () =>{
	 const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/`
		request
			.get(ENDPOINT)
			.then(response=> {
				this.setState({
					products:response.body,
				})				
			});
	}
	render(){
		return(
			<div className="body__landing"> 
				<div className="body__display"> 
					<h1 className="text__uno__dos"> Mallory Furniture</h1>
					<p className="text__uno">Your furniture is old</p>
					<p className="text__uno">Our is older</p>
				</div>
				<div className="body__featured">
					<h3 className="featured">Featured Products </h3>
					<p className="featured__uno">Check out some of our favorite listings</p>
				</div>
				<div className="packer">

				{ this.state.products.map((product,index) =>{
					/*console.log(product.category)*/
					if (product.featured===true) {
						return(
							//PAGINA UNITARIA  AQUI DEBEMOS DE LLEVAR CADA LINK AL PRODUCTO ID
								<div className="block" key={product._id}>
									<div className="block__image">
										<img className="url__api" src={product.imageLink}  alt=""/>	
									</div>
									
									<div>
										<p className="text__block">{product.item}</p>
											<p className="text__block__gray"> $ {product.price}</p>
									</div>	
									
								</div>
								);
					}					
				})}

				</div>
			</div>
		);
	}
}

export default Body;
import React,{Component} from "react"
import "./Item.css"
import request from 'superagent';
//EN ESTE ITEM DEBE DE IR EL MODELO SOLO

class Item extends Component{  //item = shoppinglist josh

	constructor(props){

		
		super(props);
		this.state = {
			item:{},
		}
	}

	componentDidMount() {
	this.fetchApi();
	
  	}

	fetchApi = () =>{
	 const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/${this.props.match.params.item}`
		request
			.get(ENDPOINT)
			.then(response=> {
/*				console.log(response.body)*/
				this.setState({
					item:response.body   //AQUI PRODUCTS TIENE 61 COMPONENTES
						//
				})		
				
			});
	
	}

	componentDidUpdate(prevProps) {
	  
	  if (this.props.match.params.category !== prevProps.match.params.item) {
	  	this.fetchApi();
	  }
	}

	
	render(){
		/*console.log(this.state.item)*/
		return(
			<div className="body__item">
				<div className="item__uno">
					<img id="img__uno" src={this.state.item.imageLink}  alt="uno"/>
				</div>
				
				<div className="item__dos">
					<div className="item__dos__title">
						<h4 className="it1">{this.state.item.item}</h4>
					</div>
					<div className="item__dos__subtitle">
						<p className="it2">${this.state.item.price}</p>
					</div>
					
						<div className="item__dos__trio">
							<div className="triple"> 
								<p className="under">Condition</p>
								<p className="condition">{this.state.item.condition}</p>
							</div>
							<div className="triple"> 
								<p className="under">Measurements</p>
								<p className="condition"> <span>W:{this.state.item.width}	 </span> 
									<span>L:{this.state.item.length} </span> 
									<span> H:{this.state.item.height}</span> 
								</p> 
							</div>
							<div className="triple__add"> 
								<button 
								
								onClick={() => { this.props.saveFunction(this.state.item._id)  }}
								 className="addTo"> Add to Cart</button>	
							</div> 
						</div>
					
				</div>
			</div>
		);
	}
}

export default Item;
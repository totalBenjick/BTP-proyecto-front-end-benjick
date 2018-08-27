import React, {Component} from "react"
import "./Furniture.css"
import request from 'superagent';
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom';

class Furniture extends Component{
	constructor(props){
		super(props);
		this.state = {
			products:[],  //ESTA ES LA QUE SE DEBE MODIICAR CON TODOS LOS ITEMS SEATINGS, SEAN ON SALE O NO
			onsale:[],    //AQUI VAN LOS SEATINS ON SALE
			disponible:[], //AQUI
			disponibleSegundo:[],
			comodin:[],		//AQUI
			filter:""
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
					products:response.body,    //AQUI PRODUCTS TIENE 61 COMPONENTES
					disponible:response.body,	//
				})		
				this.ButtonIni();
			});
	
	}

	componentDidUpdate(prevProps) {
	  
	  if (this.props.match.params.category !== prevProps.match.params.category) {
	  	this.fetchApi();
	  }
	}

	getCategory=()=>{
		var category=(this.props.match.params.category);
		return category
	}
//MAPEAR IGUAL QUE EN EL ALL PRODUCTS, PRIMERO LLEGAN TODOS LUEGO SE FILTRAPOR PRIMERA VEZ Y SE PASA A PRODUCTS


	ButtonIni = () =>{
		
		this.setState({products:[]})
		this.setState({comodin:[]})
	        
		{ this.state.disponible.map	((product,index) =>{
			if (product.category===this.getCategory()) {
				return(
					this.state.comodin.push(product)
				);
			}						
		})}
		this.setState({products:this.state.comodin})
		this.setState({disponibleSegundo:this.state.comodin})
		 	
	}


	Allbutton = (e) =>{
		e.preventDefault();
		this.setState({products:[]})
		


		this.setState({comodin:[]})
	        
		{ this.state.disponible.map	((product,index) =>{
			if (product.category===this.getCategory()) {
				
					this.state.comodin.push(product)
				
			}						
		})}
		this.setState({products:this.state.comodin})
		this.setState({disponibleSegundo:this.state.comodin})
		 	
	}

	OnSale = (e) =>{
		e.preventDefault();
		this.setState({products:[]})							//ASEGURARTE DE LLAMAR A EVALUAR EL PRODUCTS, VER SI TIENEN ALGO ON SALE Y PONERLO EN onsale
		this.setState({onsale:[]})
		this.setState({comodin:[]})

		{this.state.disponibleSegundo.map ((product, index) =>{
			if (product.onSale===true) {
				
					this.state.onsale.push(product)
				
			}
		})}	

		this.setState({products:this.state.onsale})
	
	}


 toCapitalFirst(s) { return s[0].toUpperCase() + s.slice(1) }



//AQUI HACER UNA RULETA COMO LA DE LOS ICONOS PARA TODAS LAS CATEGORIAS DE PARAMS, AL IGUALARLO ENTONCES DARLE UN

	render(){
		const Titulos = this.props.match.params.category;
		return(
			<div className="body__landing"> 
			<div className={this.getCategory()}>
				</div>
				<div className="space">
					<div className="body__featured__allproducts">
						<h3 className="featured__allproducts">{this.toCapitalFirst(Titulos)}</h3>
						<p className="featured__uno__allproducts">All {this.toCapitalFirst(Titulos)} listings</p>
					</div>
					<div className="body__featured__all">
							<button className="body__products__all__x" onClick={this.Allbutton} >All Items</button>
							<button className="body__products__all__y" onClick={this.OnSale}>On Sale</button>					
					</div>
					<div className="body__featured__all__yellow">
						<h3 className="yell"> {this.state.products.length}     <span className="gray">items showing</span></h3>
					</div>
				</div>

				<div className="packer">
				

					{ this.state.products.map((product,index) =>{
											
							return(
																							//PAGINA UNITARIA  AQUI DEBEMOS DE LLEVAR CADA LINK AL PRODUCTO ID
																							//NO EVALUAR, EVAUALR PRIMERO LAS DEFINIDS Y LUEGO SI NO, LAS  INDEFINIDAS
								<Link to={`/Item/${product._id}`}>
									<div className="block" key={product._id}>
										<div className="block__image">
											<img className="url__api" src={product.imageLink}  alt=""/>	
										</div>
										
										<div>
											<p className="text__block">{product.item}</p>
												<p className="text__block__gray"> $ {product.price}</p>
										</div>	
										
									</div>
								</Link>
									);
						

						
					})}
					<Footer />
				</div>
			</div>
		);
	}
}

export default Furniture;
import React, {Component} from "react"
import "./AllProducts.css"
import request from 'superagent';
import { Link } from 'react-router-dom';	


class AllProducts extends Component{

	constructor(props){ //I.- EL CONSTTRUCTOR RECIBE EL ESTADO, SON 3 ARRAYS PARA JUGAR CON ELLOS EN LOS BOTONAZOZ
		super(props);
		this.state = {
			products:[],
			onsale:[],
			disponible:[],
			filter:""
		}

		
	}
	componentDidMount() {  //II INICIALIZACION
	this.fetchApi();

  	}

/**/fetchApi=() =>{   //III.- ESTO ES LLAMADO POR EL COMPONENTDIDMOUNT
	/*this.getLength();*/
	 const ENDPOINT = `https://mallory-furniture-admin.now.sh/api/v1/products/`  // EL REQUEST
		request
			.get(ENDPOINT)
			.then(response=> {
				/*console.log(response.body)*/
				this.setState({
					products:response.body,
					disponible:response.body,
				})				
			});
	}


	Allbutton = () =>{						//ESTE BOTON BORRA TODO EL ARRAY DE PRODUCTS Y LE VUELVE A PONER EL DISPONIBLE QUE ES EL BACKUP
		this.setState({products:[]})
		this.setState({products:this.state.disponible})

	}

	OnSale = () =>{							//ESTE BOTON HACE LO MISMO QUE EL DE ARRIBA PERO MAPEANDO LOS ONSALE
		this.setState({products:[]})
		this.setState({onsale:[]})
		{ this.state.disponible.map	((product,index) =>{

			if (product.onSale===true) {
			
					this.state.onsale.push(product)
			
			}						
		})}		

		this.setState({products:this.state.onsale})		
	}



	render(){
		/*console.log(this.state.products)*/
		return(
			<div className="body__landing"> 
				<div className="space">
					<div className="body__featured__allproducts">
						<h3 className="featured__allproducts">All Products </h3>
						<p className="featured__uno__allproducts">All available listings</p>
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

					{ this.state.products.map	((product,index) =>{
										
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



				</div>
								
			</div>
		);
	}
}

export default AllProducts;
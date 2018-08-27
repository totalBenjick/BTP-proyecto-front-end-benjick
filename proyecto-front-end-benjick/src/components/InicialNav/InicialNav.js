import React, {Component} from "react"
import "./InicialNav.css"
import logo from './mf-logo-white.svg';
import { Link } from 'react-router-dom';


class InicialNav extends Component{
	render(){
		return(
			<React.Fragment>
				<header className="header__buttons">
					
						<div className= "header__blocks"> 
							<Link to="/"> 
							<img id="logo__white" src={logo}  alt="logo white"/>
							</Link>
						</div>
					

					<Link to="/"> 
						<div className= "header__blocks"> 
							<p className="text" >About</p>
						</div>
					</Link>

					<Link to="/terms">
						<div className= "header__blocks__terms"> 
							<p className="text">Terms & Conditions</p>
						</div>
					</Link>
					
					<Link to='/AllProducts/all'>
					<div className= "header__blocks">
						<p className="text">All</p>
					</div>
					 </Link>

					<Link to="/furniture/seating">
					<div className= "header__blocks__blue"> 
						<p className="text">Seating</p>
					</div>
					</Link>

					<Link to="/furniture/tables">
					<div className= "header__blocks__blue"> 
						<p className="text">Tables</p>
					</div>
					</Link>

					<Link to="/furniture/desks">
					<div className= "header__blocks__blue"> 
						<p className="text">Desks</p>
					</div>
					</Link>

					<Link to="/furniture/storage">
					<div className= "header__blocks__blue"> 
						<p className="text">Storage</p>
					</div>
					</Link>

					<Link to="/furniture/bedroom">
					<div className= "header__blocks__blue"> 
						<p className="text">Bedroom</p>
					</div>
					</Link>

					<Link to="/furniture/miscellaneous">
					<div className= "header__blocks__blue__linea"> 
						<p className="text">Misc</p>
					</div>
					</Link>

					
					<div className= "shopping_cart" onClick={this.props.changeState}> 
						<i className="fa fa-shopping-cart" aria-hidden="true"></i>
					</div>


				</header>
			</React.Fragment>
		);
	}
}


export default InicialNav
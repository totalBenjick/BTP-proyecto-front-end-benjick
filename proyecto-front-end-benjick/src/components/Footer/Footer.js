import React, {Component} from "react"
import "./Footer.css"
import { Link } from 'react-router-dom';

class Footer extends Component{  //AQUI PODRIA HABER DOS COMPONENTES EL FOOTERUNO Y EL FOOTERDOS
	render(){
		return(
			
			<div className="footer">
				<div className="body__red">

					<Link to='/AllProducts/all'>
					<h3 className="body__products"> All Products</h3>
					</Link>

				</div>
				<div className="body__featured__uno">
					<h3 className="featured">Browse by categories </h3>
					<p className="featured__uno">Explore by furniture type</p>
				</div>
				<div className="body__blue">
					<Link to="/furniture/seating">
					<h3 className="body__furniture">Seating</h3>
					</Link>

					<Link to="/furniture/tables">
					<h3 className="body__furniture"> Tables</h3>
					</Link>

					<Link to="/furniture/desks">
					<h3 className="body__furniture"> Desks</h3>
					</Link>

					<Link to="/furniture/bedroom">
					<h3 className="body__furniture"> Bedroom</h3>
					</Link>

					<Link to="/furniture/storage">
					<h3 className="body__furniture"> Storage</h3>
					</Link>

					<Link to="/furniture/miscellaneous">
					<h3 className="body__furniture"> Misc</h3>
					</Link>			
				
				</div>		

			</div>
			
		);
	}
}

export default Footer;


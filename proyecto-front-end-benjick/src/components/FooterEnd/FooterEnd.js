import React,{Component} from "react";
import { Link } from 'react-router-dom';
import "./FooterEnd.css"

class FooterEnd extends Component{
	render(){
		return(
			<React.Fragment>
					<div className="body__featured__uno__mf">
    			 	</div>
					<div className='footer-horizontal'>
			          <div>
			            <p className='footer-section-title'>Company</p>
			            <Link className='footer-link-decoration' to='/' ><p>About</p></Link>
			            <Link className='footer-link-decoration' to='/terms'><p>Terms + Conditions</p></Link>
			          </div>
			          <div>
			            <p className='footer-section-title'>Categories</p>
			            <Link className='footer-link-decoration' to='/furniture/seating'><p>Seating</p></Link>
			            <Link className='footer-link-decoration' to='/furniture/tables'><p>Tables</p></Link>
			            <Link className='footer-link-decoration' to='/furniture/desks'><p>Desks</p></Link>
			            <Link className='footer-link-decoration' to='/furniture/storage'><p>Storage</p></Link>
			            <Link className='footer-link-decoration' to='/furniture/bedroom'><p>Bedroom</p></Link>
			            <Link className='footer-link-decoration' to='/furniture/miscellaneous'><p>Misc</p></Link>
			          </div>
			          <div>
			            <p className='footer-section-title'>Social</p>
			            <div>
			              <ul className='grid'>
			                <li><i className="fa fa-instagram"></i></li>
			                <li><i className="fa fa-twitter"></i></li>
			                <li><i className="fa fa-pinterest"></i></li>
			              </ul>
			            </div>
					  </div>					  
					</div>
			</React.Fragment>
		);
	}
}

export default FooterEnd;
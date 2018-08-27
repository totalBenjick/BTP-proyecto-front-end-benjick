import React, { Component } from 'react';
import                  './App.css';
import InicialNav from  "./components/InicialNav/InicialNav";
import Body from        "./components/Body/Body";
import { Switch, Route } from 'react-router-dom';
import Terms from       "./components/Terms/Terms";
import Furniture from   "./components/Furniture/Furniture";
import AllProducts from "./components/AllProducts/AllProducts";
import Item from        "./components/Item/Item";
import FooterEnd from   "./components/FooterEnd/FooterEnd"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"


class App extends Component {

  constructor(props){
    super();
    this.state = {
      cartList:[],
      push:false,
    }

    this.saveToCart=this.saveToCart.bind(this)
    this.changeState=this.changeState.bind(this)
  }

  saveToCart(id){
    
    this.setState(prevState => ({
      cartList: [...prevState.cartList, id]
    }))
  }

  changeState(){
    console.log(this.state.push);
    this.setState(prevState =>({
      push:!this.state.push
    }))
  }

  render() {
    /*console.log(this.state.cartList)*/
    return (
      <div className="app__container">
        <InicialNav changeState={this.changeState}/>
        <ShoppingCart cartList={this.state.cartList} check={this.state.push} changePush={this.changeState}/>
        <Switch>
        	<Route exact path='/' component={Body} /> 
        	<Route exact path='/terms' component={Terms} /> 
        	<Route path='/furniture/:category' component={Furniture} /> 
          <Route path='/AllProducts/:sale' component={AllProducts} /> 
          <Route  path="/Item/:item" 
                  render={(props) =>  
                    <Item {...props} saveFunction={this.saveToCart}/>}
                  />  
        </Switch>
        <FooterEnd />

      </div>
    );
  }
}

export default App;

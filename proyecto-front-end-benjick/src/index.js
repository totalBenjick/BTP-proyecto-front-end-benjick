import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));


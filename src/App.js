import React, {Component} from 'react';
import './App.css';

import Filtros from './components/Filtros'
import Home from './components/Home'
import Carrinho from './components/Carrinho'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filtros />
  
        <Home />
  
        <Carrinho />
      </div>
    );
  }
}

export default App;

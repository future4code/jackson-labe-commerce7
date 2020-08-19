import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'

import Filtros from './components/Filtros'
import Home from './components/Home'
import Carrinho from './components/Carrinho'

import shoppingCartIcon from './img/shopping_cart.svg'

const CartButton = styled.button`
  cursor: pointer;
  position: fixed;
  width: 80px;
  height: 80px;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;

  outline: none;
  border: none;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);
  transition: box-shadow 1s;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.35);
  }

  img {
    height: 40px;
    width: 40px;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filtros />

        <Home />
  
        <Carrinho />

        <CartButton><img src={shoppingCartIcon} alt="Shopping Cart Icon"/></CartButton>
      </div>
    );
  }
}

export default App;

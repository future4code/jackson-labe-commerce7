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
  state = {
    filtroValorMaximo: Infinity,
    filtroValorMinimo: -Infinity,
    filtroNomeProduto: '',
  }

  onChangeValorMaximo = (e) => {
    this.setState({filtroValorMaximo: Number(e.target.value)})
  }

  onChangeValorMinimo = (e) => {
    this.setState({filtroValorMinimo: Number(e.target.value)})
  }

  onChangeNomeProduto = (e) => {
    this.setState({filtroNomeProduto: e.target.value})
  }

  handleLimparFiltros = (e) => {
    e.preventDefault()

    this.setState({
      filtroValorMaximo: Infinity,
      filtroValorMinimo: -Infinity,
      filtroNomeProduto: ''
    })
  }
  
  render() {
    return (
      <div className="App">
        <Filtros 
          valorMaximo={this.state.filtroValorMaximo}
          valorMinimo={this.state.filtroValorMinimo}
          nome={this.state.filtroNomeProduto}
          limparFiltros={this.handleLimparFiltros}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeNomeProduto={this.onChangeNomeProduto}
        />

        <Home 
          valorMaximo={this.state.filtroValorMaximo}
          valorMinimo={this.state.filtroValorMinimo}
          nome={this.state.filtroNomeProduto}  
        />
  
        <Carrinho />

        <CartButton><img src={shoppingCartIcon} alt="Shopping Cart Icon"/></CartButton>
      </div>
    );
  }
}

export default App;

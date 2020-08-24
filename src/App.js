import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components'

import Filtros from './components/Filtros'
import Home from './components/Home'
import Carrinho from './components/Carrinho'

import shoppingCartIcon from './img/shopping_cart.svg'

import products from './database/produtos'

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
  transition: box-shadow 1s, background-color 1s ease-out;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.35);
    background-color: lightgray;
  }

  img {
    height: 40px;
    width: 40px;
  }

  div {
    display:flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: -10px;
    background-color: red;
    color: white;
  }
`

class App extends Component {
  state = {
    filtroValorMaximo: Infinity,
    filtroValorMinimo: -Infinity,
    filtroNomeProduto: '',
    mostrarCarrinho: false,
    iconeCarrinho: [],
  }

  componentDidMount = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    this.setState({iconeCarrinho: carrinho})
  }

  componentDidUpdate = () => {
    localStorage.setItem('carrinho', JSON.stringify(this.state.iconeCarrinho))
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

  adicionarAOCarrinho = (id) => {
    const item = products.find(product => id === product.id)
    const adicionado = this.state.iconeCarrinho.some(product => id === product.id)
    
    if (adicionado) {
      this.adicionarQuantidade(id)
    } else {
      const itemTratado = {
        id: item.id,
        nome: item.nome,
        valor: item.valor,
        quantidade: 1
      }
  
      this.setState({iconeCarrinho: [...this.state.iconeCarrinho, itemTratado]})
    }
  }

  adicionarQuantidade = (id) => {
    const carrinho = this.state.iconeCarrinho

    carrinho.forEach(product => {
      if (id === product.id) {
        product.quantidade += 1
      }
    })

    this.setState({iconeCarrinho: carrinho})
  }

  removerQuantidade = (id) => {
    const carrinho = this.state.iconeCarrinho

    carrinho.forEach(product => {
      if (id === product.id) {
        product.quantidade -= 1
      }
    }) 

    this.setState({iconeCarrinho: carrinho.filter(item => item.quantidade > 0)})
  }

  limparCarrinho = () => {
    this.setState({iconeCarrinho: []})
  }

  toggleCarrinho = () => {
    this.setState({mostrarCarrinho: !this.state.mostrarCarrinho})
  }

  contarItems = () => {
    return this.state.iconeCarrinho.reduce((total, item) => total + item.quantidade, 0)
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
          produtos={products} 
          valorMaximo={this.state.filtroValorMaximo}
          valorMinimo={this.state.filtroValorMinimo}
          nome={this.state.filtroNomeProduto}
          onAdicionarAoCarrinho={this.adicionarAOCarrinho}  
        />
  
        {
          this.state.mostrarCarrinho && 
          <Carrinho 
            listaCarrinho={this.state.iconeCarrinho}
            onLimparCarrinho={this.limparCarrinho}
            onAdicionar={this.adicionarQuantidade}
            onRemover={this.removerQuantidade}
          />
        }

        <CartButton onClick={this.toggleCarrinho}>
          <img src={shoppingCartIcon} alt="Shopping Cart Icon"/>
          {this.contarItems() ? <div>{this.contarItems()}</div> : ''}
        </CartButton>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import styled from 'styled-components'
import Produto from './Produto'

const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  margin-top: 10px;
  gap: 20px;
`
const Container = styled.div`
  margin: 0px 10px;
  flex-grow:2;
`

const MenuSuperior = styled.div`
display:flex;
justify-content:space-between;

`

class Home extends Component {
  state = {
    ordem: ''
  }

  handleChangeOrdem = (e) => {
    this.setState({ordem: e.target.value})
  }

  filtrarLista = () => this.props.produtos
      .filter((product) => this.props.valorMaximo >= product.valor)
      .filter((product) => this.props.valorMinimo <= product.valor)
      .filter((product) => product.nome.toLowerCase().includes(this.props.nome.toLowerCase()))
      .sort((produto1, produto2) => {
        if (this.state.ordem === "crescente") {
          return produto1.valor - produto2.valor
        } else if (this.state.ordem === "decrescente") {
          return produto2.valor - produto1.valor
        } else {
          return 0
        }
      }) 
  
  render() {
    const listaFiltrada = this.filtrarLista()
    
    return (
      <Container> 
        <MenuSuperior>
          <span>Quantidade de Produtos: {listaFiltrada.length}</span> 
          <select value={this.state.ordem} onChange={this.handleChangeOrdem}>
            <option value=''>--- Ordenar por preço ---</option>
            <option value='crescente'>Preço: Crescente</option>
            <option value='decrescente'>Preço: Decrescente</option>
          </select>
        </MenuSuperior>
        <Produtos>
          {listaFiltrada.map((product) => (
            <Produto
              key={product.id}
              imagem={product.imagem}
              nome={product.nome}
              valor={product.valor}
              comprimento={product.comprimento}
              velocidade={product.velocidade}
              armamento={product.armamento}
              productId={product.id}
              onAdicionarAoCarrinho={this.props.onAdicionarAoCarrinho}
            />
          ))}
        </Produtos>
      </Container>
    )
  }
}

export default Home

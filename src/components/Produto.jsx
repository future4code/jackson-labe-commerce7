import React, {Component} from 'react'
import styled from 'styled-components'


const BotaoAdicionar = styled.button`
  margin: 0 auto;
  background: black;
  color: white;
  border: unset;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  
:hover {
    background: orange;
}
`

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  border: 1px dashed orange;
  padding: 5px;

  img{
    width:100%
  }

  p {
    margin: 5px 0px;
  }

  h3{
    align-self: center;
  }
`

const StyledPrice = styled.p`
  font-size: 1.5rem;
  color: green;
  font-weight: bold;
  align-self: flex-end;
  margin: 10px 0px !important; 
`

class Produto extends Component {
  
    render() {
      return (
        <Container>
          <img src= {this.props.imagem} />
          <h3>{this.props.nome}</h3>
          <p><strong>Comprimento: </strong>{this.props.comprimento}</p>
          <p><strong>Velocidade: </strong>{this.props.velocidade}</p>
          <p><strong>Armamento: </strong>{this.props.armamento}</p>
          <StyledPrice>R$ {this.props.valor}</StyledPrice>
          <BotaoAdicionar onClick={() => this.props.onAdicionarAoCarrinho(this.props.productId)}>Adicionar ao carrinho</BotaoAdicionar>
        </Container>
      )
  }
}

export default Produto
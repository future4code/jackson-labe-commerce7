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
  border: 1px dashed orange;
  padding: 5px;

  img{width:100%}

`


class Produto extends Component {
  
    render() {
      return (
        <Container>
          <img src= {this.props.imagem} />
          <p>{this.props.nome}</p>
          <p>{this.props.valor}</p>
          <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
        </Container>
      )
  }
}

export default Produto
import React, {Component} from 'react'
import styled from 'styled-components'
import Produto from './Produto'

const products = [
  {
    id: 1,
    nome: 'Item a',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 2,
    nome: 'Item b',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 3,
    nome: 'Item c',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 4,
    nome: 'Item d',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 5,
    nome: 'Item e',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 6,
    nome: 'Item f',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 7,
    nome: 'Item g',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 8,
    nome: 'Item h',
    valor: 'R$100',
    imagem: "https://picsum.photos/200/200?a=5"
  }
]

const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  margin-top: 10px;
  gap: 20px;
  flex-grow:1;
`
const Container = styled.div`
  margin: 0px 10px;


`

const MenuSuperior = styled.div`
display:flex;
justify-content:space-between;

`


class Home extends Component {
  render() {
    return (
      <Container>
        <MenuSuperior>
          <span>Quantidade de Produtos: {products.length}</span> 
          <select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </select>
        </MenuSuperior>
        <Produtos>
          {products.map((product) => <Produto key={product.id} imagem={product.imagem} nome={product.nome} valor={product.valor}/>)}
        </Produtos>
      </Container>
    )
  }
}

export default Home
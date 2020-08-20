

import React, {Component} from 'react'
import styled from 'styled-components'

const Car = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 200px;

  h2 {
    margin: 5px 0px;
  }
` 
const CarProd = styled.div`
	display: flex;
  flex-direction: column;
  width: 12vw;
`


class Carrinho extends Component {
  
  render() {
    return (
      <Car>
        <h2>Carrinho</h2>
			
			  <CarProd>

          {this.props.listaCarrinho.map(item => 
            <div key={item.id}> 
              <span>{item.quantidade}x - {item.nome}</span>
              <button onClick={() => this.props.onAdicionar(item.id)}>+</button>
              <button onClick={() => this.props.onRemover(item.id)}>-</button>
            </div>
          )}

	        <div>Total: R$ {this.props.listaCarrinho.reduce((acumulador, item) => acumulador + item.valor * item.quantidade, 0)}</div> 

         <button onClick={this.props.onLimparCarrinho}>Limpar Carrinho</button>
        </CarProd>

      </Car>         
    )                      
  }
}

export default Carrinho;

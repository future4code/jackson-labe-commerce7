

import React, {Component} from 'react'
import styled from 'styled-components'

const Car = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;

  h2 {
    margin: 5px 0px;
  }
` 
const CarProd = styled.div`
	display: flex;
  flex-direction: column;
  min-width: 12vw;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 12px;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  :hover {
    color: ${(props => props.tipo === 'add' ? 'green' : 'red')}
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

class Carrinho extends Component {
  
  render() {
    return (
      <Car>
        <h2>Carrinho</h2>
			
			  <CarProd>

          {this.props.listaCarrinho.map(item => 
            <StyledDiv key={item.id}> 
              <span>{item.quantidade}x - {item.nome}</span>
              <Buttons>
                <StyledButton tipo="add" onClick={() => this.props.onAdicionar(item.id)}>+</StyledButton>
                <StyledButton tipo="remove" onClick={() => this.props.onRemover(item.id)}>-</StyledButton>
              </Buttons>
            </StyledDiv>
          )}

	        <div>Total: R$ {this.props.listaCarrinho.reduce((acumulador, item) => acumulador + item.valor * item.quantidade, 0)}</div> 

         <button onClick={this.props.onLimparCarrinho}>Limpar Carrinho</button>
        </CarProd>

      </Car>         
    )                      
  }
}

export default Carrinho;

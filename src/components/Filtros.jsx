import React, {Component} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  border: 1px solid black;
  padding: 10px;

  h2 {
    margin: 5px 0px;
  }
` 

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

class Filtros extends Component {
  render() {
    return (
      <StyledDiv>
        <h2>Filtros</h2>

        <StyledForm>
            <label htmlFor="">Valor Máximo:</label>
            <input type="number"/>
          
            <label htmlFor="">Valor Mínimo:</label>
            <input type="number"/>
          
            <label htmlFor="">Buscar Produto:</label>
            <input type="text"/>
        </StyledForm>

      </StyledDiv>
      
    )
  }
}

export default Filtros
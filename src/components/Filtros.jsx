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

  input {
    width: 12vw;
  }
`

const StyledButton = styled.button`
  margin-top: 10px;
`

class Filtros extends Component {
  render() {
    return (
      <StyledDiv>
        <h2>Filtros</h2>

        <StyledForm>
            <label htmlFor="">Valor Máximo:</label>
            <input type="number" value={this.props.valorMaximo} onChange={this.props.onChangeValorMaximo} min={this.props.valorMinimo} step={50}/>
          
            <label htmlFor="">Valor Mínimo:</label>
            <input type="number" value={this.props.valorMinimo} onChange={this.props.onChangeValorMinimo} min="0" max={this.props.valorMaximo} step={50}/>
          
            <label htmlFor="">Buscar Produto:</label>
            <input type="text" value={this.props.nome} onChange={this.props.onChangeNomeProduto}/>

            <StyledButton onClick={this.props.limparFiltros}>Limpar Filtros</StyledButton>
        </StyledForm>

      </StyledDiv>
      
    )
  }
}

export default Filtros
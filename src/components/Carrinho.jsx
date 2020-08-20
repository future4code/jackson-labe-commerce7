import React, {Component} from 'react'
import styled from 'styled-components'

const Car = styled.div`
  border: 1px solid black;
  padding: 10px;

  h2 {
    margin: 5px 0px;
  }
` 
const CarProd = styled.div`
	display: flex;
 	flex-direction: column;
`


class Carrinho extends Component {
  
  
  
  render() {
    return (
      <Car>

          <h2>Carrinho</h2>
			
			<CarProd>

	          <div><span>item </span><span> X</span></div>
	          <div><span>item </span><span> X</span></div>
	          <div><span>item </span><span> X</span></div>
	          

	          <div>Total: R$ valor</div> 

          	</CarProd>
       

      </Car>         
    )                      
  }
}

export default Carrinho;     

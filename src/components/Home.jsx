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
  flex-grow:1;
`

const MenuSuperior = styled.div`
display:flex;
justify-content:space-between;

`

const products = [
  {
    id: 1,
    nome: 'ARC-170',
    valor: 100,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_xwings_arc.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 2,
    nome: 'T-65 X-wing',
    valor: 300,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_xwings_t65b.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 3,
    nome: 'T-70 X-wing', 
    valor: 50,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_xwings_t70.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 4,
    nome: 'caça TIE/LN',
    valor: 220,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_tie_tieln.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 5,
    nome: 'Bombardeiro TIE/SA',
    valor: 180,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_tie_bomber.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 6,
    nome: 'TIE/IN interceptador',
    valor: 400,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_tie_interceptor.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 7,
    nome: 'TIE/VN',
    valor: 100,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_tie_silencer.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  },
  {
    id: 8,
    nome: 'Classe Ressurgent',
    valor: 99,
    imagem: "https://super.abril.com.br/wp-content/uploads/2019/11/si_410_starwars_des_ressurgent.png",
    comprimento: "14,5 m",
    velocidade:"1.680 Km/h",
    armamento: "2 canhões na asa, 2 canhões traseiros, 6 torpedos de prótons"
  }
]

class Home extends Component {
  state = {
    ordem: ''
  }

  handleChangeOrdem = (e) => {
    this.setState({ordem: e.target.value})
  }

  filtrarLista = () => products
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
            />
          ))}
        </Produtos>
      </Container>
    )
  }
}

export default Home

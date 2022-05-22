import Button from "../../components/button/Button";
import HomeContainer from "./styled.home";
import pig from '../../assets/pig.svg'

function Home() {
  return (
    <HomeContainer>
      <h1>Controle seus gastos onde você estiver</h1>
      <span>
        <img src={pig} alt="ILustração de um homem segurando uma moeda montado em um porco" />
      </span>
      <div>
        <Button name="Cadastro"/>
        <Button name="login"/>
      </div>
    </HomeContainer>
  )
}

export default Home;
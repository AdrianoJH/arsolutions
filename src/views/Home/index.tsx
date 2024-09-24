import LogoHeader from "../../assets/images/logo3.svg";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <C.Content>
        <C.BoxTitle>
          <h1>Criando soluções,</h1>
          <h1>codificando inovação.</h1>
        </C.BoxTitle>
        <C.BoxText>
          <span>Transformamos ideias em experiências digitais.</span>
          <span>Faça um orçamento sem compromisso.</span>
        </C.BoxText>
        <C.Button>SAIBA MAIS</C.Button>
      </C.Content>
      <C.Content>
        <C.BoxImg>
          <img src={LogoHeader} alt="logo" id="logo-menu-mobile" />
        </C.BoxImg>
      </C.Content>
    </C.Container>
  );
};

export default Home;

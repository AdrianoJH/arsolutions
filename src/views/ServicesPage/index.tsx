import * as C from "./styles";
import Web from "../../assets/images/web.svg";
import Code from "../../assets/images/code.svg";
import { FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <C.Container>
      <h1>Serviços</h1>
      <C.Content>
        <C.Card>
          <C.BoxImg>
            <img src={Web} alt="web" />
          </C.BoxImg>
          <h2>Web</h2>
          <span>
            Criação e desenvolvimento de sites, landing pages e sistemas web
            para diversas finalidades com interfaces responsivas.
          </span>
        </C.Card>
        <C.Card>
          <C.BoxImg>
            <FaMobileAlt />
          </C.BoxImg>
          <h2>Mobile</h2>
          <span>
            Criação e desenvolvimento de aplicativos mobile para diferentes
            dispositivos móveis tanto para Android quanto IOS.
          </span>
        </C.Card>
        <C.Card>
          <C.BoxImg>
          <img src={Code} alt="code" id="code"/>
          </C.BoxImg>
          <h2>Manutenção</h2>
          <span>
            Oferecemos serviços completos de manutenção, atualizações e
            aprimoramentos para o seu site, sistema web ou aplicativo móvel,
            garantindo seu funcionamento impecável e alto desempenho com
            qualidade.
          </span>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};

export default Services;

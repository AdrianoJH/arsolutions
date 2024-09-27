import { IoLogoWhatsapp } from "react-icons/io";
import * as C from "./styles";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/images/logo3.svg";

const Contact = () => {
  return (
    <C.Container>
      <h1>Contato</h1>
      <C.Content>
        <C.BoxAdress>
          <span>Rua João Cavalheiro, 28 Roça Grande</span>
          <span>CEP: 83.401-580</span>
          <span>Colombo/PR-Brasil</span>
          <span>
            <IoLogoWhatsapp />
            (41) 99960-7549
          </span>
          <span>
            <MdEmail />
            arsolutions.code@gmail.com
          </span>
          <C.BoxImg>
            <img src={Logo} alt="Logo" />
          </C.BoxImg>
        </C.BoxAdress>
        <C.Form>
          <form action="/contato">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome Completo"
            />
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="DDD + Telefone"
            />
            <textarea
              name="message"
              id="msg"
              placeholder="Digite sua mensagem..."
            ></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};

export default Contact;

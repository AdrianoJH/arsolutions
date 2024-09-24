import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </C.Container>
  );
};

export default Header;

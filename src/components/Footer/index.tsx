import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import * as C from "./styles";
import GradientSVG from "../GradientSvg";

const Footer = () => {
  return (
    <C.Container>
      <GradientSVG />
      <C.Content>
        <C.BoxSocialIcons>
          <Link to="#" target="_blank">
            <FaFacebookF />
          </Link>
          <Link to="#" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="#" target="_blank">
            <FaLinkedin />
          </Link>
        </C.BoxSocialIcons>
        <p>2024 ARSOLUTIONS, Todos os Direitos Reservados.</p>
      </C.Content>
    </C.Container>
  );
};

export default Footer;

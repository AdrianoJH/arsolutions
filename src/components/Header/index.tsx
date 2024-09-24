import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaBoxOpen,
  FaLinkedin,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import LogoHeader from "../../assets/images/logo3.svg";
import * as C from "./styles";
import GradientSVG from "../GradientSvg";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    toggleMenu();
  };

  return (
    <C.Container>
      <GradientSVG />
      <div id="button">
        <button id="btn-menu-mobile" onClick={toggleMenu}>
          {isMenuVisible ? <FaXmark id="close" /> : <FaBars id="open" />}
        </button>
      </div>
      <C.MobileMenu className={isMenuVisible ? "visible" : "hidden"}>
        <ul>
          <li
            className={activeItem === "/" ? "active" : ""}
            onClick={() => handleItemClick("/")}
          >
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          <li
            className={activeItem === "/servicos" ? "active" : ""}
            onClick={() => handleItemClick("/servicos")}
          >
            <FaTools />
            <Link to="/serviços">Serviços</Link>
          </li>
          <li
            className={activeItem === "/portfolio" ? "active" : ""}
            onClick={() => handleItemClick("/portfolio")}
          >
            <FaBoxOpen />
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            className={activeItem === "/sobre" ? "active" : ""}
            onClick={() => handleItemClick("/sobre")}
          >
            <FaInfoCircle />
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li
            className={activeItem === "/contato" ? "active" : ""}
            onClick={() => handleItemClick("/contato")}
          >
            <Link to="/contato">
              <IoMdContact />
              Contato
            </Link>
          </li>
        </ul>
        <Link to="/">
          <img src={LogoHeader} alt="logo" id="logo-menu-mobile" />
        </Link>
        <C.BoxSocialIconsMobile>
          <Link to="#" target="_blank">
            <FaFacebookF />
          </Link>
          <Link to="#" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="#" target="_blank">
            <FaLinkedin />
          </Link>
        </C.BoxSocialIconsMobile>
      </C.MobileMenu>
      <C.ImgBox>
        <Link to="/">
          <img id="logo" src={LogoHeader} alt="logo" />
        </Link>
      </C.ImgBox>
      <C.Content>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/servicos" ? "active" : ""}>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li className={location.pathname === "/portfolio" ? "active" : ""}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={location.pathname === "/sobre" ? "active" : ""}>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li className={location.pathname === "/contato" ? "active" : ""}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </C.Content>
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
    </C.Container>
  );
};

export default Header;

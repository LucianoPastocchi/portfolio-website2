import React from "react";
import "./Header.css";
import HeaderBtns from "./HeaderBtns";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/ME.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Luciano Pastocchi</h1>
        <h5 className="text-light">Fullstack JAVA Developer</h5>
        <HeaderBtns />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

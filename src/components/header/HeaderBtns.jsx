import React from "react";
import CV from "../../assets/CV.pdf";
const HeaderBtns = () => {
  return (
    <div className="btns">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default HeaderBtns;

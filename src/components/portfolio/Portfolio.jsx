import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    img: "",
    title: "",
    github: "",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="containter portfolio_container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_btns">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

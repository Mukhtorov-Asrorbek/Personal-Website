import React from "react";
import "./Portfolio.css";
import IMG from "../../assets/sales1.jpg";
import IMG1 from "../../assets/sales2.jpg";
import IMG2 from "../../assets/sales3.jpg";
import IMG3 from "../../assets/sales4.jpg";
import IMG4 from "../../assets/sales5.jpg";
import IMG5 from "../../assets/sales6.jpg";

const data = [
  {
    id: 1,
    image: IMG,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG1,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG2,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 4,
    image: IMG3,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG4,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 1,
    image: IMG,
    title: "",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
];

const Portfolio = () => {
  return (
    <section id="portolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>Crypto currency Dashboard & Financial</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Charts templates & infographics in Figma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Figma dashboard UI kit for data design web</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Maintaining tasks and tracking progress</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Charts templates & infographics in Figma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Charts templates & infographics in Figma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

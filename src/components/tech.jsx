import React from "react";
import Express from "../assets/express.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.png";
import NodeJs from "../assets/nodejs.png";
import Php from "../assets/php.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";

export default function Experience() {
  return (
    <section className="tech">
      <div className="container-tools">
        <div className="tech-text">
          <h1>Tools</h1>
          <p>
            Some of the projects that I make use several technologies for design
            or development, the technology that I use
          </p>
        </div>
        <div className="container-icon">
          <div className="icon-tools">
            <a href="https://help.figma.com/hc/en-us" target="blank">
              <img src={Figma} alt="" />
            </a>
            <h3>Figma</h3>
          </div>
          <div className="icon-tools">
            <a href="https://nodejs.org/docs/latest/api/" target="blank">
              <img src={NodeJs} alt="" />
            </a>
            <h3>NodeJs</h3>
          </div>
          <div className="icon-tools">
            <a href="https://docs.github.com/en" target="blank">
              <img src={Github} alt="" />
            </a>
            <h3>Github</h3>
          </div>
          <div className="icon-tools">
            <a href="https://react.dev/" target="blank">
              <img src={ReactLogo} alt="" />
            </a>
            <h3>React</h3>
          </div>
          <div className="icon-tools">
            <a href="https://expressjs.com/" target="blank">
              <img src={Express} alt="" />
            </a>
            <h3>Express js</h3>
          </div>
          <div className="icon-tools">
            <a href="https://tailwindcss.com/" target="blank">
              <img src={Tailwind} alt="" />
            </a>
            <h3>Tailwind Css</h3>
          </div>
          <div className="icon-tools">
            <a href="https://www.php.net/docs.php" target="blank">
              <img src={Php} alt="" />
            </a>
            <h3>Php</h3>
          </div>
          <div className="icon-tools">
            <a href="" target="blank">
              <img src={JS} alt="" />
            </a>
            <h3>Javascript</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

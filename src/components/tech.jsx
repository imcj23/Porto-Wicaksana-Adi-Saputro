import React from "react";
import Express from "../assets/express.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.png";
import NodeJs from "../assets/nodejs.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import VSCode from "../assets/vs code.png";

export default function TechStack() {
  return (
    <section className="tech-stack">
      <h2 className="title">Tech Stack</h2>
      <div className="card-container">
        <div className="stack-card">
          <h3>Frontend</h3>
          <div className="stack-card-logo">
            <div className="logo">
              <img src={ReactLogo} alt="React" />
              <h2>React</h2>
            </div>
            <div className="logo">
              <img src={Tailwind} alt="Tailwind" />
              <h2>Tailwind</h2>
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h3>Tools</h3>
          <div className="stack-card-logo">
            <div className="logo">
              <img src={Github} alt="GitHub" />
              <h2>Github</h2>
            </div>
            <div className="logo">
              <img src={Figma} alt="Figma" />
              <h2>Figma</h2>
            </div>
            <div className="logo">
              <img src={VSCode} alt="VSCode" />
              <h2>VSCode</h2>
            </div>
          </div>
        </div>

        <div className="stack-card">
          <h3>Backend</h3>
          <div className="stack-card-logo">
            <div className="logo">
              <img src={Express} alt="Express" />
              <h2>Express JS</h2>
            </div>
            <div className="logo">
              <img src={NodeJs} alt="Node.js" />
              <h2>Node JS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

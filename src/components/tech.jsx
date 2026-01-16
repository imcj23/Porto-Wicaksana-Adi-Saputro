import ReactLogo from "../assets/react.png";
import Express from "../assets/express.png";
import NodeJs from "../assets/nodejs.png";
import Js from "../assets/Javascipt.jpg";
import Git from "../assets/git.png";
import Figma from "../assets/figma.png";
import Tailwind from "../assets/tailwind.png";
import Mysql from "../assets/mysql.png";
import Github from "../assets/github.png";
import VSCode from "../assets/vs code.png";

export default function TechStack() {
  return (
    <section>
      <div className="tech-container">
        <div className="tech-heading">
          <h2>Skills</h2>
          <p>The skills, tools and technology I use to create a project</p>
        </div>
        <div className="tech-skill">
          <div className="tech-skills">
            <div className="skills-container">
              <div className="skills-img">
                <img src={Js} alt="JavaScript" />
                <h3>JavaScript</h3>
              </div>
              <div className="skills-img">
                <img src={ReactLogo} alt="react" />
                <h3>React</h3>
              </div>
              <div className="skills-img">
                <img src={Express} alt="Express.js" />
                <h3>Express Js</h3>
              </div>
              <div className="skills-img">
                <img src={NodeJs} alt="Node.Js" />
                <h3>Node.Js</h3>
              </div>
              <div className="skills-img">
                <img src={Git} alt="Git" />
                <h3>Git</h3>
              </div>
              <div className="skills-img">
                <img src={Figma} alt="Figma" />
                <h3>Figma</h3>
              </div>
              <div className="skills-img">
                <img src={Tailwind} alt="" />
                <h3>Tailwind</h3>
              </div>
              <div className="skills-img">
                <img src={Mysql} alt="Mysql" />
                <h3>MySql</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

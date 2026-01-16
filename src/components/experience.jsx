import { experienceData } from "../utils/experience";
import "../App.css";

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience-tag">
        <h2 className="experience-title">Experience</h2>
      </div>

      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <img src={exp.logo} alt={exp.company} />
              <div>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>

            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

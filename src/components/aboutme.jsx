import Image from "../assets/Wicaksana.png";

export default function Aboutme() {
  return (
    <>
      <section className="aboutme">
        <div className="main">
          <div className="image2">
            <img src={Image} alt="aboutme" />
          </div>
          <div className="about-text">
            <h2>About me</h2>
            <p>
              Informatics engineering students who are interested in software
              development, have experience in web development while
              participating in the government program "Internship and
              Independent Study Batch 6" and got a role as a coder in 2
              projects, namely Micro Challenge and Massive Challenge using the
              React framework and took an internship at PT Kinema Systrans,
              Research and Development division, I got a role as a system design
              and testing. And also have experience designing mobile
              applications using React Native during college. I always want to
              learn about technology because technology is always evolving
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

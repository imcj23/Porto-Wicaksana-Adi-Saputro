import Image from "../assets/pict1.jpg";

export default function Aboutme() {
  return (
    <>
      <section className="aboutme">
        <div className="aboutme-tag">
          <h2>Get To Know Me</h2>
        </div>
        <div className="main">
          <div className="image2">
            <img src={Image} alt="aboutme" />
          </div>
          <div className="about-text">
            <p>
              I’m Wicaksana Adi Saputro, s student of Information of Technology
              at the Indonesian Institute of Technology in Tanjungpinang. I’m a
              Frontend developer with passion for building clean, responsive and
              user-friendly web interfaces. I enjoy working with modern
              technologies like React and Tailwind Css to build scalable and
              maintable UI. I focus on writing clean and efficient code and i
              love turning UI/UX Design into real, interactive products. I’m
              always eager to learn new tools and frameworks, and i aspire to
              contribute to impactful products with great teams. Outside of
              progamming, I enjoy sport such as Badminton and Martial Art
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

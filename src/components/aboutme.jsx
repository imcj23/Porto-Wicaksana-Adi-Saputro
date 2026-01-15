import Tech from './tech'
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
              I'm Wicaksana Adi Saputro, an Information Technology student at
              the Indonesian Institute of Technology in Tanjungpinang. I am a
              frontend developer with a passion for building clean, responsive,
              and user-friendly web interfaces. I enjoy working with modern
              technologies such as React and Tailwind CSS to build scalable and
              maintainable user interfaces (UI). I focus on writing clean and
              efficient code, and I enjoy turning UI/UX designs into real
              interactive products. I am always enthusiastic about learning new
              tools and frameworks, and I aspire to contribute to impactful
              products alongside a great team. 
              <br /><br /> 
              I entered the IT world when I started college in 2021. My interest in technology is immense
              because this field is highly promising for the future as the world
              continues to evolve. Starting with HTML, CSS, and JavaScript, now i can create websites using React.js and also learn backend
              development using Node.js. 
              <br /><br />
              Lastly, I am open to freelance work, so
              feel free to contact me.
            </p>
          </div>
        </div>
        <Tech/>
      </section>
    </>
  );
}

// import React from 'react';
import Image1 from "../assets/Wicaksana.png";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
  const DownloadCv  = () => {
    const link = document.createElement('a');
    link.href = '/public/CV_Wicaksana_Adi_Saputro.pdf';
    link.download = 'CV_Wicaksana_Adi_Saputro.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <section className="section">
        <div className="section_container">
          <div className="content">
            <h1 className="judul">
              Hii, I'm<span> Wicaksana an</span> <br />
              Informatic Engineering Student
            </h1>
            <p className="describe">Frontend Developer who is enthusiastic about building attractive and functional web interfaces. I enjoy transforming designs into interactive interfaces with attention to detail, performance, and user experience.</p>
            <p className="location">
              <IoLocationOutline /> Based in Tanjungpinang, kepulauan Riau,
              Indonesia
            </p> 
          </div>
          <div className="button">
            <button onClick={DownloadCv}>Curriculum Vitae</button>
          </div>
        </div>
        <div className="section-pict">
          <img src={Image1} alt="" />
        </div>
      </section>
    </>
  );
}

// import React from 'react';
import Image1 from '../assets/pict1.jpg'
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
    const handleDownload  = () => {
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
        <div className="section__container">
          <div className="content">
            <h1 className="judul">Hii, I'm<span> Wicaksana<br />an</span> Informatic Engineering Student</h1>
            <p className="description">
              <IoLocationOutline/> Based in Tanjungpinang, kepulauan Riau, Indonesia
            </p>
            <div className="button">
              <button type="button" className="porto" onClick={handleDownload}>
                Curriculum Vitae
              </button>
            </div>
          </div>
          <div className="image">
            <img src={Image1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

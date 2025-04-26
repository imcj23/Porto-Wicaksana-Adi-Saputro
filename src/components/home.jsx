import React from 'react';
import Image1 from '../assets/pict1.jpg'
// import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
    const handleDownload  = () => {
      const link = document.createElement('a');
      link.href = '/src/file/CV.pdf';
      link.download = 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  return (
    <>
      <section className="section">
        <div className="section__container">
          <div className="content">
            <h1 className="judul">I'm<span> Wicaksana<br />a</span> student informatic engineering</h1>
            <p className="description">
            I am an 8th semester student in the informatics engineering study program
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

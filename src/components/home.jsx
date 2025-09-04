// import React from 'react';
import Image1 from "../assets/pict1.jpg";
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
  const DownloadPorto = () => {
    const link = document.createElement('a')
    link.href = '';
    link.download = '';
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
            <p className="description">
              <IoLocationOutline /> Based in Tanjungpinang, kepulauan Riau,
              Indonesia
            </p> 
          </div>
          <div className="button">
            <button onClick={DownloadCv}>Curriculum Vitae</button>
            <button onClick={DownloadPorto}>Portofolio</button>
          </div>
        </div>
      </section>
    </>
  );
}

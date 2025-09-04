import Navbar from "./components/navbar";
import Home from "./components/home";
import Aboutme from "./components/aboutme";
import Tech from "./components/tech";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Project from "./components/project";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Tech />
      <Project/>
      <Contact />
      <Footer/> 
    </>
  );
}

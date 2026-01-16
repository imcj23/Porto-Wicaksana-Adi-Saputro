import Navbar from "./components/navbar";
import Home from "./components/home";
import Aboutme from "./components/aboutme";
import Experience from "./components/experience";
import Project from "./components/project";
// import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Experience />
      <Project/>
      <Footer/>  
      {/* 
      <Contact />
      */}
    </>
  );
}

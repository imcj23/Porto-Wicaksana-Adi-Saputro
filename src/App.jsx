import Navbar from "./components/navbar";
import Home from './components/home'
import Aboutme from "./components/aboutme";
import Tech from "./components/tech";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App(){
  return(
    <>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Tech/>
      <Contact/>
      <Footer/>
    </>
  )
}
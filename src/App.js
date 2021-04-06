import './App.css';
import { useEffect } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import Navbar from "./Components/Navbar/Navbar";
import Mywork from "./Components/Mywork/Mywork";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import Animations from "./Components/Animations/Animations";
import Features from './Features';
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    window.onload = function(){
      document.getElementById('loader').style.display = 'none'
    }
  })
  return (
    <div>
      <div className="loader" id="loader">
        <div className="loader_div">
          <img src="http://www.mikimottes.com/images/ajax-loader.gif" alt="Loading..."></img>
        </div>
      </div>
      <div className="bg"/>
      <div className="content">
        <HeaderComponent />
        <Navbar />
        <Mywork />
        <AboutComponent />
        <Features />
        <Contact />
        <Footer />
      </div>
      <div className="animations">
        <Animations/>
      </div>
      <div className="backhills" id="backhills"></div>
    </div>
  );
}

export default App;

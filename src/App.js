import './App.css';
import { useEffect } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import Navbar from "./Components/Navbar/Navbar";
import Mywork from "./Components/Mywork/Mywork";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
<<<<<<< HEAD
import Features from './Components/Features/Features';

=======
import Animations from "./Components/Animations/Animations";
import Features from './Features';
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
>>>>>>> f29c674964a9e6d4b822ba174a8a404ef5c1ff69

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

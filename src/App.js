import './App.css';
import { useEffect } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import Navbar from "./Components/Navbar/Navbar";
import Mywork from "./Components/Mywork/Mywork";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import Animations from "./Components/Animations/Animations";
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
      </div>
      <div className="animations">
        <Animations/>
      </div>
      <div className="backhills" id="backhills"></div>
    </div>
  );
}

export default App;

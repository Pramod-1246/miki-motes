import './App.css';
import Mywork from './Components/Mywork/Mywork';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import { useEffect } from 'react';

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
        <Mywork/>
        <AboutComponent />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from "./Navbar/Navbar";
import Mywork from './Components/Mywork/Mywork';
import AboutComponent from './Components/AboutComponent/AboutComponent';

function App() {
  return (
    <div>
      <div className="bg"/>
      <div className="content">
        <Navbar />
        <Mywork/>
        <AboutComponent />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;
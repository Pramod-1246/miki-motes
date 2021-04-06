import "./App.css";
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import Navbar from "./Components/Navbar/Navbar";
import Mywork from "./Components/Mywork/Mywork";
import AboutComponent from "./Components/AboutComponent/AboutComponent";


function App() {
  return (
    <div>
      <div className="bg" />
      <div className="content">
        <HeaderComponent />
        <Navbar />
        <Mywork />
        <AboutComponent />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;

import "./App.css";
import Mywork from "./Components/Mywork/Mywork";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';


function App() {
  return (
    <div>
      <div className="bg" />
      <div className="content">
        <HeaderComponent />
        <Navbar />
        <Mywork />
        <AboutComponent />
        <Contact />
        <Footer />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;

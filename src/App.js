import './App.css';
import Mywork from './Components/Mywork/Mywork';
import AboutComponent from './Components/AboutComponent/AboutComponent';

function App() {
  return (
    <div>
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

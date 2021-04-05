import './App.css';
import Navbar from "./Navbar/Navbar";

import Mywork from './Components/Mywork/Mywork'
function App() {
  return (
    <div>
      <div className="bg"/>
      <div className="content">
        <Navbar />
        <Mywork/>
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;
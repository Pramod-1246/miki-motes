import './App.css';
import Features from './Features';

import Mywork from './Components/Mywork/Mywork'
function App() {
  return (
    <div>
      <div className="bg"/>
      <div className="content">
        <Mywork/>
        <Features />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;

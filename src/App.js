import "./App.css";
import Mywork from "./Components/Mywork/Mywork";
function App() {
  return (
    <div>
      <div className="bg" />
      <div className="content">
        <div style={{ width: "100%", height: "483px" }}></div>
        <Mywork />
      </div>
      <div className="animations"></div>
      <div className="backhills"></div>
    </div>
  );
}

export default App;

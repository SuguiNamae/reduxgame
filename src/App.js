import logo from "./logo.svg";
import "./App.css";
import Temporary from "./components/GameMechanics/Temporary";
import Intro from "./components/intro/Intro";
import Initiation from "./components/Initiation/Initiation";

function App() {
  return (
    <div className="App">
      <Intro />
      <Initiation/>
      <Temporary/>
    </div>
  );
}

export default App;

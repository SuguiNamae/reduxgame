import logo from "./logo.svg";
import "./App.css";
import Temporary from "./components/GameMechanics/Temporary";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <Temporary/>
    </div>
  );
}

export default App;

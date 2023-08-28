import "./App.css";
import { Topper } from "./components/Body/Topper";
import { Main } from "./components/Headers/Main";

function App() {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
      <div className="color">
        <Topper />
      </div>
    </div>
  );
}

export default App;

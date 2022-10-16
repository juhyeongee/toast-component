import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button">토스트 올리기</button>
      </header>
      <div></div>
    </div>
  );
}

export default App;

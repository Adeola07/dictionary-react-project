import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="header">Dictionary</h1>
      <div className="container">
        <Dictionary defaultKeyword="rain" />
      </div>
    </div>
  );
}

export default App;

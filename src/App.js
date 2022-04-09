import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="header"> 🔍Dictionary</h1>
      <div className="container">
        <Dictionary defaultKeyword="waterfall" />
      </div>
      <footer>
        <a
          href="https://github.com/Adeola07/dictionary-react-project"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by{" "}
        <a
          href="https://laughing-boyd-4e1917.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Adeola Ejalonibu
        </a>
      </footer>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import Parent from "./Components/DataSharing/Parent";

// node modules : dependency / library files are stored in node modules locally

// App.js is React "Component"  // One whole application is divided into smaller parts which are called as components

// JSX : XML / HTML wrapped in Javascript

// hooks : React hooks used to handle or modify code .

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;

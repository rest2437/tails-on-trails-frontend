import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Title from "./components/TitlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title />
      </BrowserRouter>
    </div>
  );
}

export default App;

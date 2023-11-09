import logo from "/logo.png";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <img src={logo} className="logo react" alt="React logo" />
      </div>
      <h1>Bigfoot Frontend </h1>
      <Outlet />
    </div>
  );
}

export default App;

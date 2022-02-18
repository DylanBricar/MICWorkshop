/**
 * Import css
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

/**
 * Import pages
 */
import Login from "./Pages/Login/Login";
import Messages from "./Pages/Messages/Messages";
import Disconnect from "./Pages/Disconnect/Disconnect";

/**
 * Import react
 */
import { Link, Routes, Route } from "react-router-dom";

const App = () => (
  <div className="container">
    <div className="row">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/disconnect">Déconnexion</Link>
    </div>

    <div className="row">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/disconnect" element={<Disconnect />} />
      </Routes>
    </div>
  </div>
);

export default App;

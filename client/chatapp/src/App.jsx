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

/**
 * Import react
 */
import { Link, Routes, Route } from "react-router-dom";

const App = () => (
  <div className="container">
    <div className="row">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
    </div>

    <div className="row">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  </div>
);

export default App;

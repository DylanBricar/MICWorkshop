import { useState } from "react";
import axios from "axios";
import useLocalStorage from "../../Helper/useLocalStorage";
import { Navigate } from "react-router-dom";
/**
 * Import css
 */
import "./Login.scss";

var Login = (props) => {
  /** States */
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useLocalStorage("user", {});

  const connectUser = async () => {
    var dataToSend = {
      name: name,
      password: password,
    };

    const res = await axios
      .post("http://localhost:4445/user/connect", dataToSend)
      .catch((e) => e.response);

    if (!res.data.error) {
      setCurrentUser(res.data);
    } else {
      console.log(res.data);
    }
  };

  /**
   * Uses when the Login is submitted
   * @param {*} e the current event
   */
  const LoginFormSubmit = (e) => {
    e.preventDefault();
    connectUser();
  };

  if (currentUser._id) {
    return <Navigate to="messages" />;
  }

  return (
    <>
      <div className="login-container" id="container">
        <div className="form-container sign-in-container">
          <form className="login-form" onSubmit={LoginFormSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="input"
              className="mt-2"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              className="mt-2"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button className="login-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost login-button" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Workshop - 2022</p>
      </footer>
    </>
  );
};

export default Login;

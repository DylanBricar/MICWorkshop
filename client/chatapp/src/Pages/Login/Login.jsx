/**
 * Import css
 */
import "./Login.scss";

var Login = (props) => (
  <>
    <div className="login-container" id="container">
      <div className="form-container sign-in-container">
        <form className="login-form" action="#">
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
          <input type="email" className="mt-2" placeholder="Email" />
          <input type="password" className="mt-2" placeholder="Password" />
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

export default Login;

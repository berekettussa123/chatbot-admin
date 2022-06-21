import './register.css';

export default function Register() {

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AAU Chatbot</h3>
          <span className="loginDesc">
          The best chat bot in all Ethiopian Universites.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Username"

              className="loginInput"
              required
            />
            <input
              placeholder="Email"
            
              className="loginInput"
              required
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

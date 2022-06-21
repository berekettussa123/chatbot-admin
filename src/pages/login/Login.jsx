import { useContext, useRef } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';


export default function Login() {
  const {dispatch,error} = useContext(LoginContext)

  const  email  = useRef();
  const  password  = useRef();
  const navigate = useNavigate()

  const loginHanlder = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
       const res = await axios.post(
        'https://amharic-chatbot-for-aau-admin.herokuapp.com/signin',
        {
          email: email.current.value,
          password: password.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/analytics")
      
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE",payload: { message: "Invalid Credentials" }})
    }
  };

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
          <form className="loginBox" onSubmit={loginHanlder}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button
              className="loginButton"
              type="submit"
            >
              Login
            </button>
            {error && <span style={{color:'red'}}>{error.message}</span>}
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <button className="loginRegisterButton signupp">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import {React, useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = ({dispatch}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "Login"});
    navigate("/Home");
    //Api call below
  }

  return (
    <div className="index-btn-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailInput">Email Address</label>
          <input type="email" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input type="password" id="passwordInput" name="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button className="btn btn-login-form-submit" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <p>Dont have an account? Click here</p>
    </div>
  );
};

export default LoginForm;

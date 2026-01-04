import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "./authService";
import React from "react";
const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = isRegister
      ? register(username, email, password)
      : login(email, password);

    if (!user) {
      alert(isRegister ? "User already exists" : "Invalid credentials");
      return;
    }

    // navigate("/");
    navigate("/");

  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Sign in"}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        {isRegister && (
          <input
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <br/><br/>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        /> <br/><br/>

        <button type="submit">
          {isRegister ? "Register" : "Sign in"}
        </button>
      </form>

      <p className="auth-switch">
        {isRegister ? "Already have an account?" : "New user?"}
        <span onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? " Sign in" : " Register"}
        </span>
      </p>
    </div>
  );
};

export default AuthPage;

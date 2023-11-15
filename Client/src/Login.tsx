import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      });
      if (response.data.token && response.status === 200) {
        sessionStorage.setItem("userToken", response.data.token);
        navigate("/quiz");
      } else {
        alert("Something gone went wrong");
      }
    } catch (err) {
      alert("Incorrect credentials");
    }
  };

  return (
    <div>
      <Nav page="quiz" />

      <form className="loginContainer">
        <h1 className="signInTitle">Sign in</h1>
        <label htmlFor="Username">Username:</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="button loginButton"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

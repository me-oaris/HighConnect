import { useState } from "react";
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import './login.css';

function Login() {
  const baseURL = "";

  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState({
    mode: "error",
    title: "",
    description: ""
  });

  const [isLogin, setIsLogin] = useState(true); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetFields = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = async () => {
    if (!username.trim()) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Username is required." });
      setShow(true);
      return;
    }
    if (!password.trim()) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Password is required." });
      setShow(true);
      return;
    }

    try {
      const response = await fetch(`${baseURL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setPopupData({
          mode: "error",
          title: "Login Failed",
          description: data.message || "Invalid username or password."
        });
        setShow(true);
      } else {
        setPopupData({
          mode: "success",
          title: "Welcome!",
          description: `Hello, ${data.username || username}.`
        });
        setShow(true);
      }
    } catch {
      setPopupData({
        mode: "error",
        title: "Error",
        description: "Unable to connect to the server."
      });
      setShow(true);
    }
  };

  const handleSignup = async () => {
    if (!username.trim()) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Username is required." });
      setShow(true);
      return;
    }
    if (!password.trim()) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Password is required." });
      setShow(true);
      return;
    }
    if (password.length < 8) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Password must be at least 8 characters." });
      setShow(true);
      return;
    }
    if (password !== confirmPassword) {
      setPopupData({ mode: "error", title: "Invalid!", description: "Passwords do not match." });
      setShow(true);
      return;
    }

    try {
      const response = await fetch(`${baseURL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setPopupData({
          mode: "error",
          title: "Signup Failed",
          description: data.message || "Something went wrong."
        });
        setShow(true);
      } else {
        setPopupData({
          mode: "success",
          title: "Success!",
          description: "Account created. Please log in."
        });
        setShow(true);
        setIsLogin(true);
        resetFields();
      }
    } catch {
      setPopupData({
        mode: "error",
        title: "Error",
        description: "Unable to connect to the server."
      });
      setShow(true);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetFields();
  };

  return (
    <>
      <Navbar />
      <div className="center-screen">
        <div className="auth-card">
          {isLogin ? (
            <>
              <h2>Welcome Back</h2>
              <input
                type="text"
                placeholder="Username"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="auth-button" onClick={handleLogin}>Login</button>
              <button className="auth-button secondary" onClick={toggleForm}>Sign Up</button>
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <input
                type="text"
                placeholder="Username"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password (min 8 chars)"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="auth-button" onClick={handleSignup}>Sign Up</button>
              <button className="auth-button secondary" onClick={toggleForm}>Back to Login</button>
            </>
          )}
        </div>
      </div>

      <Popup
        mode={popupData.mode}
        title={popupData.title}
        description={popupData.description}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}

export default Login;

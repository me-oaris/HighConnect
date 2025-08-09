import { useState } from "react";
import Navbar from '../components/Navbar';
import Popup from '../components/Popup'
import './login.css';

function Login() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar />
      <div className="center-screen">
        <div className="auth-card">
          <h2>Welcome Back</h2>
          <input type="text" placeholder="Username" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button className="auth-button" onClick={() => setShow(true)}>Login</button>
          <button className="auth-button secondary">Sign Up</button>
        </div>
      </div>
      <Popup
        mode="error"
        title="Invalid!"
        description="Something Went Wrong."
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}

export default Login;

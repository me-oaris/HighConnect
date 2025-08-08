import Navbar from '../components/Navbar';
import './login.css';

function Login() {
  return (
    <>
      <Navbar />
      <div className="center-screen">
        <div className="auth-card">
          <h2>Welcome Back</h2>
          <input type="text" placeholder="Username" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button className="auth-button">Login</button>
          <button className="auth-button secondary">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Login;

import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-bar">
      <img className="nav-image" src="/hc-logo.png" alt="hc-logo" />
      <div className="nav-links">
        <a href="/"><i className="fa-solid fa-house"></i></a>
        <a href="/about"><i className="fa-solid fa-handshake"></i></a>
        <a href="/jobs"><i className="fa-solid fa-briefcase"></i></a>
        <a href="/profile"><i className="fa-solid fa-user"></i></a>
      </div>
    </div>
  );
}

export default Navbar;

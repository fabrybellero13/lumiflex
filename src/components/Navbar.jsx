import { useState } from "react";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => setMenuAbierto(false)}
      >
        <span className="logo-white">Lumi</span>
        <span className="logo-gradient">Flex™</span>
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <div className={`menu ${menuAbierto ? "activo" : ""}`}>
        <a href="#home" onClick={() => setMenuAbierto(false)}>
          Home
        </a>

        <a href="#product" onClick={() => setMenuAbierto(false)}>
          Product
        </a>

        <a href="#reviews" onClick={() => setMenuAbierto(false)}>
          Reviews
        </a>

        <a href="#faq" onClick={() => setMenuAbierto(false)}>
          FAQ
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
import { useState } from "react";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">LumiFlex™</h2>

      <button
        className="menu-btn"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <div className={`menu ${menuAbierto ? "activo" : ""}`}>
        <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
        <a href="#producto" onClick={() => setMenuAbierto(false)}>Producto</a>
        <a href="#opiniones" onClick={() => setMenuAbierto(false)}>Opiniones</a>
        <a href="#faq" onClick={() => setMenuAbierto(false)}>FAQ</a>
      </div>
    </nav>
  );
}

export default Navbar;
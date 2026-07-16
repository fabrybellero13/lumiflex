import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top"></div>

      <div className="footer-container">

        <div className="footer-brand">
          <h2>LumiFlex™</h2>
          <p>
            Iluminá tus espacios con tecnología RGB inteligente y un diseño
            moderno para cualquier ambiente.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>

          <a href="#">Inicio</a>
          <a href="#">Producto</a>
          <a href="#">Opiniones</a>
          <a href="#">Preguntas</a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>📧 contacto@lumiflex.com</p>
          <p>📍 Buenos Aires, Argentina</p>
        </div>

        <div className="footer-social">

          <h3>Seguinos</h3>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTiktok /></a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LumiFlex™ · Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;
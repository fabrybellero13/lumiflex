import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top"></div>

      <div className="footer-container">

        <div className="footer-brand">
          <h2>LumiFlex™</h2>

          <p>
            Premium RGB lighting designed to transform every room into a modern,
            immersive and personalized space.
          </p>
        </div>

        <div className="footer-links">

          <h3>Navigation</h3>

          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@lumiflex.com</p>
          <p>🕒 Monday – Friday | 9:00 AM – 6:00 PM</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTiktok /></a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LumiFlex™. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
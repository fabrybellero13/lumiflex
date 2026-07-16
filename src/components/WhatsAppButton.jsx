import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/3487521556?text=Hola%20me%20interesa%20la%20LumiFlex%20RGB."
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
import img1 from "../images/lampara1.png";
import img2 from "../images/lampara2.png";
import img3 from "../images/lampara3.png";
import img4 from "../images/lampara4.png";

function Gallery() {
  return (
    <section className="gallery" id="galeria">

      <h2>Galería</h2>

      <div className="gallery-grid">

        <div>
          <img src={img1} alt="LumiFlex en living moderno" />
        </div>

        <div>
          <img src={img2} alt="LumiFlex en escritorio gamer" />
        </div>

        <div>
          <img src={img3} alt="LumiFlex en dormitorio" />
        </div>

        <div>
          <img src={img4} alt="LumiFlex en sala de estar" />
        </div>

      </div>

    </section>
  );
}

export default Gallery;
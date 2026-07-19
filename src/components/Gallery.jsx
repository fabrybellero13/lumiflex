import img1 from "../images/lampara1.png";
import img2 from "../images/lampara2.png";
import img3 from "../images/lampara3.png";
import img4 from "../images/lampara4.png";

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <h2>See LumiFlex™ in Action</h2>

      <div className="gallery-grid">

        <div>
          <img
            src={img1}
            alt="LumiFlex RGB Floor Lamp in a modern living room"
          />
        </div>

        <div>
          <img
            src={img2}
            alt="LumiFlex RGB Floor Lamp in a gaming setup"
          />
        </div>

        <div>
          <img
            src={img3}
            alt="LumiFlex RGB Floor Lamp in a cozy bedroom"
          />
        </div>

        <div>
          <img
            src={img4}
            alt="LumiFlex RGB Floor Lamp in a stylish home"
          />
        </div>

      </div>

    </section>
  );
}

export default Gallery;
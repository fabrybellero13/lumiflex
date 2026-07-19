import lampara from "../images/lampara.png";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-text">

        <span className="cta-badge">
          🔥 Limited Time Offer
        </span>

        <h2>
          Upgrade Your Space
          <br />
          Today.
        </h2>

        <p>
          Whether you're gaming, watching movies, working or simply relaxing,
          LumiFlex™ creates the perfect atmosphere with vibrant RGB lighting,
          smart controls and a sleek modern design.
        </p>

        <div className="cta-price">
          $49.99
        </div>

        <a href="#product">
          <button>
            Shop Now
          </button>
        </a>

      </div>

      <div className="cta-image">

        <div className="cta-glow"></div>

        <img
          src={lampara}
          alt="LumiFlex RGB Floor Lamp"
        />

      </div>

    </section>
  );
}

export default FinalCTA;
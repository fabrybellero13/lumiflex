import Reveal from "./Reveal";
import lampara from "../images/lampara.png";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-content">

        <Reveal delay={200}>
          <div className="hero-text">

            <span className="hero-badge">
              🔥 Oferta por tiempo limitado
            </span>

            <h1>
              Transformá
              <br />
              cualquier
              <br />
              espacio con
              <br />
              una sola luz.
            </h1>

            <p>
              Descubrí la nueva LumiFlex™ Corner RGB Pro y convertí tu habitación
              en un ambiente moderno, elegante y totalmente personalizable.
            </p>

            <a
              href="https://wa.me/3487521556?text=Hola%20me%20interesa%20la%20LumiFlex%20RGB.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Comprar ahora
              </button>
            </a>

          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero-image">

            <div className="light-glow"></div>

            <img
              src={lampara}
              alt="Lámpara RGB LumiFlex"
            />

          </div>
        </Reveal>

      </div>

    </section>
  );
}

export default Hero;
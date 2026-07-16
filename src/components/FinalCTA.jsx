import lampara from "../images/lampara.png";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-text">

        <span className="cta-badge">
          🔥 Oferta por tiempo limitado
        </span>

        <h2>
          ¿Listo para transformar
          <br />
          tu habitación?
        </h2>

        <p>
          Descubrí una nueva forma de iluminar tus espacios con más de
          16 millones de colores, sincronización con música y control
          inteligente desde tu celular.
        </p>

        <div className="cta-price">
          $79.999
        </div>

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

      <div className="cta-image">

        <div className="cta-glow"></div>

        <img
          src={lampara}
          alt="LumiFlex"
        />

      </div>

    </section>
  );
}

export default FinalCTA;
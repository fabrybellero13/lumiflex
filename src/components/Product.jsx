import lampara from "../images/lampara.png";

function Product() {
  return (
    <section className="product-section" id="producto">

      <div className="product-image">
        <img src={lampara} alt="Lámpara LumiFlex RGB" />
      </div>

      <div className="product-info">

        <span className="badge">🔥 Más vendido</span>

        <h2>LumiFlex™ Corner RGB Pro</h2>

        <p>
          Iluminación LED inteligente con más de 16 millones de colores,
          sincronización con música, control desde app y múltiples efectos.
        </p>

        <div className="specs">
          <div>✅ RGB IC</div>
          <div>✅ Control remoto</div>
          <div>✅ App Bluetooth</div>
          <div>✅ Modo Música</div>
          <div>✅ Bajo consumo</div>
          <div>✅ 30.000 horas de vida útil</div>
        </div>

        <h3 className="price">$79.999</h3>

        <a
          href="https://wa.me/3487521556?text=Hola%20me%20interesa%20la%20LumiFlex%20RGB.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar ahora</button>
        </a>

      </div>

    </section>
  );
}

export default Product;
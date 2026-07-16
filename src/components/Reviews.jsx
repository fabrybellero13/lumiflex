function Reviews() {
  return (
    <section className="reviews" id="opiniones">

      <h2>Lo que dicen nuestros clientes</h2>

      <div className="reviews-grid">

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            "No pensé que una lámpara pudiera cambiar tanto mi habitación.
            Ahora el setup parece completamente distinto."
          </p>
          <h4>— Lucas M.</h4>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            "La sincronización con la música es increíble.
            Todos los que vienen a casa preguntan dónde la compré."
          </p>
          <h4>— Sofía R.</h4>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p>
            "Muy fácil de instalar, excelente calidad y el control desde el celular funciona perfecto."
          </p>
          <h4>— Martín G.</h4>
        </div>

      </div>

    </section>
  );
}

export default Reviews;
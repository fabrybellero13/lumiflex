import Counter from "./Counter";

function Stats() {
  return (
    <section className="stats">

      <div className="stat">
        <Counter end={4} suffix=".9★" />
        <p>Calificación promedio</p>
      </div>

      <div className="stat">
        <Counter end={2500} suffix="+" />
        <p>Clientes felices</p>
      </div>

      <div className="stat">
        <Counter end={50000} suffix="+" />
        <p>Lámparas vendidas</p>
      </div>

      <div className="stat">
        <Counter end={18} />
        <p>Países alcanzados</p>
      </div>

    </section>
  );
}

export default Stats;
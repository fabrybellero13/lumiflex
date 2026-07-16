import {
  Truck,
  ShieldCheck,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Envíos rápidos",
    text: "Realizamos envíos a todo el país de forma rápida y segura.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía oficial",
    text: "Todos nuestros productos cuentan con garantía por defectos de fabricación.",
  },
  {
    icon: CreditCard,
    title: "Pagos seguros",
    text: "Aceptamos tarjetas, transferencia y Mercado Pago.",
  },
  {
    icon: HeartHandshake,
    title: "Clientes felices",
    text: "Miles de personas ya transformaron sus ambientes con LumiFlex.",
  },
];

function WhyUs() {
  return (
    <section className="why-us">

      <span className="why-badge">CALIDAD PREMIUM</span>

      <h2>¿Por qué comprar con nosotros?</h2>

      <div className="why-grid">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="why-card"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              <div className="why-icon">
                <Icon size={44} strokeWidth={2} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WhyUs;
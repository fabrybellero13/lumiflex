import { motion } from "framer-motion";

function Benefits() {
  const cards = [
    {
      icon: "🌈",
      title: "16 millones de colores",
      text: "Elegí exactamente el ambiente que querés con una paleta casi infinita.",
    },
    {
      icon: "🎵",
      title: "Modo Música",
      text: "La iluminación reacciona automáticamente al ritmo de tus canciones.",
    },
    {
      icon: "📱",
      title: "Control Inteligente",
      text: "Controlá la lámpara desde tu celular o con el control remoto incluido.",
    },
    {
      icon: "⚡",
      title: "Bajo consumo",
      text: "Tecnología LED moderna que consume muy poca energía.",
    },
  ];

  return (
    <section className="benefits">
      <h2>¿Por qué elegir LumiFlex™?</h2>

      <div className="benefits-grid">
        {cards.map((card, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
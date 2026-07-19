import { motion } from "framer-motion";

function Benefits() {
  const cards = [
    {
      icon: "🌈",
      title: "16 Million RGB Colors",
      text: "Customize every moment with vibrant colors and dynamic lighting effects for any mood.",
    },
    {
      icon: "🎵",
      title: "Music Sync",
      text: "Your lights react instantly to your favorite songs, creating an immersive experience.",
    },
    {
      icon: "📱",
      title: "Smart Control",
      text: "Control every setting with the Bluetooth app or the included remote control.",
    },
    {
      icon: "⚡",
      title: "Energy Efficient",
      text: "Modern LED technology delivers stunning brightness while using very little power.",
    },
  ];

  return (
    <section className="benefits">
      <h2>Why Choose LumiFlex™?</h2>

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
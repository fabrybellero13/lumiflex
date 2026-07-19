function TrustBar() {
  const items = [
    {
      icon: "🚚",
      title: "Fast U.S. Shipping",
      text: "Quick delivery across the United States.",
    },
    {
      icon: "🔒",
      title: "Secure Checkout",
      text: "Your payment is protected with encrypted checkout.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      text: "Designed with high-quality LEDs built to last.",
    },
    {
      icon: "💬",
      title: "Customer Support",
      text: "We're here to help whenever you need us.",
    },
  ];

  return (
    <section className="trust-bar">
      <div className="trust-container">
        {items.map((item, index) => (
          <div className="trust-card" key={index}>
            <div className="trust-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
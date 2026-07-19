import {
  Truck,
  ShieldCheck,
  CreditCard,
  Headset,
} from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Fast U.S. Shipping",
    text: "Quick and reliable delivery across the United States with tracking included.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Guarantee",
    text: "If you're not completely satisfied, we'll make it right with our 30-day satisfaction guarantee.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    text: "Checkout securely using Visa, Mastercard, American Express, PayPal and more.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "Our support team is ready to help you before and after your purchase.",
  },
];

function WhyUs() {
  return (
    <section className="why-us">

      <span className="why-badge">
        PREMIUM QUALITY
      </span>

      <h2>Why Shop With LumiFlex™?</h2>

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
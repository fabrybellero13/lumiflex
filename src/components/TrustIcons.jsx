import {
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    text: "Secure Checkout",
  },
  {
    icon: Truck,
    text: "Free U.S. Shipping",
  },
  {
    icon: RotateCcw,
    text: "30-Day Returns",
  },
];

function TrustIcons() {
  return (
    <div className="trust-icons">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div className="trust-item" key={index}>
            <Icon size={18} />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TrustIcons;
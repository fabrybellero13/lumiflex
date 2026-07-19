import Counter from "./Counter";
import {
  Palette,
  Lightbulb,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: <Palette size={34} />,
    value: 16,
    suffix: "M+",
    label: "RGB Color Options",
  },
  {
    icon: <Lightbulb size={34} />,
    value: 30,
    suffix: "K",
    label: "Hours LED Lifetime",
  },
  {
    icon: <ShieldCheck size={34} />,
    value: 30,
    suffix: "-Day",
    label: "Money-Back Guarantee",
  },
  {
    icon: <Truck size={34} />,
    value: 3,
    suffix: "-7",
    label: "Business Day Delivery",
  },
];

function Stats() {
  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>

          <div className="stat-icon">
            {item.icon}
          </div>

          <h3>
            <Counter
              end={item.value}
              suffix={item.suffix}
            />
          </h3>

          <p>{item.label}</p>

        </div>
      ))}
    </section>
  );
}

export default Stats;
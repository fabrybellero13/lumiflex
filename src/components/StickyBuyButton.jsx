import { useEffect, useState } from "react";

function StickyBuyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#product"
      className={`sticky-buy ${visible ? "show" : ""}`}
    >
      🛒 Buy Now • $49.99
    </a>
  );
}

export default StickyBuyButton;
import lampara from "../images/lampara.png";
import TrustIcons from "./TrustIcons";
import PaymentIcons from "./PaymentIcons";

function Product() {
  return (
    <section className="product-section" id="product">

      <div className="product-image">
        <img
          src={lampara}
          alt="LumiFlex™ RGB Floor Lamp"
        />
      </div>

      <div className="product-info">

        <span className="badge">🔥 Best Seller</span>

        <h2>LumiFlex™ RGB Floor Lamp</h2>

        <p>
  Create the perfect atmosphere for gaming, relaxing, working or watching movies.
  With 16 million colors, music sync and smart app control, LumiFlex™ instantly
  transforms any room into a modern immersive space.
</p>

        <div className="specs">
          <div>✅ 16 Million RGB Colors</div>
          <div>✅ Bluetooth App Control</div>
          <div>✅ Remote Control Included</div>
          <div>✅ Music Sync Mode</div>
          <div>✅ Energy Efficient LED</div>
          <div>✅ Up to 30,000 Hours Lifetime</div>
        </div>

        <h3 className="price">$49.99</h3>

        <div className="product-actions">

          <a href="#checkout">
            <button>Get Yours Today</button>
          </a>

          <TrustIcons />

          <PaymentIcons />

        </div>

      </div>

    </section>
  );
}

export default Product;
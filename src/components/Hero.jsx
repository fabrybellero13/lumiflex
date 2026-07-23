import Reveal from "./Reveal";
import OfferSection from "./OfferSection";
import lampara from "../images/lampara.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <Reveal delay={200}>
          <div className="hero-text">

            <span className="hero-badge">
              🔥 Limited Time Offer
            </span>

            <h1>
              Transform Your Space
              <span className="gradient-text">
                {" "}With Stunning RGB Lighting
              </span>
            </h1>

            <p>
              Create the perfect atmosphere for gaming, movies, relaxing or
              working with 16 million colors, music sync and smart app control.
            </p>

            <div className="hero-rating">
              ⭐⭐⭐⭐⭐
              <span> Trusted by happy customers</span>
            </div>

            <div className="hero-price-box">

              <div className="discount-badge">
                🔥 SAVE 50%
              </div>

              <h2 className="hero-price">

                <span className="old-price">
                  $99.99
                </span>

                <span className="new-price">
                  $49.99
                </span>

              </h2>

              <p className="price-info">
                ✔ Limited Time Offer • Free Worldwide Shipping
              </p>

            </div>

            <OfferSection />

            <a
  href="#product"
  className="hero-button-link"
>
  <button className="hero-button">
    Get Yours Today
  </button>
</a>

            <div className="hero-features">
              <span>🚚 Free Shipping</span>
              <span>🔒 Secure Checkout</span>
              <span>🛡️ 30-Day Guarantee</span>
            </div>

          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero-image">

            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>

            <img
              src={lampara}
              alt="LumiFlex RGB Corner Lamp"
            />

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Hero;
import { useEffect, useState } from "react";

function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 42,
    seconds: 18,
  });

  const [viewers, setViewers] = useState(18);
  const [stock, setStock] = useState(9);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    const viewersInterval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 12) + 18);
    }, 6000);

    const stockInterval = setInterval(() => {
      setStock((prev) => {
        if (prev > 5) return prev - 1;
        return prev;
      });
    }, 90000);

    return () => {
      clearInterval(timer);
      clearInterval(viewersInterval);
      clearInterval(stockInterval);
    };
  }, []);

  return (
    <div className="offer-section">

      <div className="offer-countdown">

        <span className="offer-title">
          ⏰ Flash Sale Ends In
        </span>

        <div className="countdown">

          <div>
            <h2>{String(timeLeft.hours).padStart(2, "0")}</h2>
            <p>Hours</p>
          </div>

          <div>
            <h2>{String(timeLeft.minutes).padStart(2, "0")}</h2>
            <p>Minutes</p>
          </div>

          <div>
            <h2>{String(timeLeft.seconds).padStart(2, "0")}</h2>
            <p>Seconds</p>
          </div>

        </div>

      </div>

      <div className="offer-info">

        <p>
          🟢 {viewers} people are viewing this product
        </p>

        <p>
          📦 Only {stock} units left today
        </p>

      </div>

    </div>
  );
}

export default OfferSection;
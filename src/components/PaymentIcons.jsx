import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";

function PaymentIcons() {
  return (
    <div className="payment-icons">

      <div className="payment-card">
        <FaCcVisa />
      </div>

      <div className="payment-card">
        <FaCcMastercard />
      </div>

      <div className="payment-card">
        <FaCcPaypal />
      </div>

      <div className="payment-card">
        <FaCcApplePay />
      </div>

    </div>
  );
}

export default PaymentIcons;
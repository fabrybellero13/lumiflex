import { useState } from "react";

function Question({ title, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-header">
        <h3>{title}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>

      <div className="faq-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section className="faq" id="faq">

      <h2>Frequently Asked Questions</h2>

      <Question
        title="Can I control the lamp with my phone?"
        answer="Yes. LumiFlex™ works with a free Bluetooth app available for both iPhone and Android devices."
      />

      <Question
        title="Does it come with a warranty?"
        answer="Yes. Every LumiFlex™ lamp includes a 30-day money-back guarantee and warranty against manufacturing defects."
      />

      <Question
        title="How long does shipping take?"
        answer="Most orders arrive within 3–7 business days anywhere in the United States."
      />

      <Question
        title="Does it use a lot of electricity?"
        answer="No. LumiFlex™ uses energy-efficient LED technology, providing bright lighting while consuming very little power."
      />

      <Question
        title="Can I change the colors and lighting effects?"
        answer="Absolutely. Choose from over 16 million colors, dynamic lighting effects, scene modes and music synchronization through the app or remote control."
      />

    </section>
  );
}

export default Faq;
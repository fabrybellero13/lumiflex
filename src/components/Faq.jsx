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

      <h2>Preguntas frecuentes</h2>

      <Question
        title="¿La lámpara funciona con celular?"
        answer="Sí. Se controla desde una aplicación compatible con Android e iPhone."
      />

      <Question
        title="¿Tiene garantía?"
        answer="Sí. Todos nuestros productos cuentan con garantía oficial por defectos de fabricación."
      />

      <Question
        title="¿Cuánto tarda el envío?"
        answer="Los envíos suelen demorar entre 2 y 5 días hábiles dependiendo de tu ubicación."
      />

      <Question
        title="¿Consume mucha electricidad?"
        answer="No. Utiliza tecnología LED de bajo consumo, ideal para usar muchas horas."
      />

      <Question
        title="¿Tiene diferentes modos de iluminación?"
        answer="Sí. Incluye millones de colores, efectos dinámicos y sincronización con música."
      />

    </section>
  );
}

export default Faq;
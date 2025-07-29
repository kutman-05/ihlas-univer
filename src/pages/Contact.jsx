import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, phone, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Сураныч, бардык талааларды толтуруңуз.");
      return;
    }

    const fullMessage = `Саламатсызбы? ${name}  ${email}  ${phone} ${subject}  ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappLink = `https://wa.me/996709051636?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");

    // Форманы тазалоо
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1>Байланыш</h1>
        <p>Global Consult - Байланыш</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>📌 Маалымат</h2>
          <p>
            📍 Аталар кварталы, шейит Айхан Арслан көчөсү №10Б/1, Картал,
            Стамбул
          </p>
          <p>📧 Email: infothinkturkiye@gmail.com</p>
          <p>📞 Телефон: +996 505 400 900</p>
          <p>📱 WhatsApp: +996 505 400 900</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>📨 Байланышыңыз</h2>
          <input
            type="text"
            name="name"
            placeholder="Сиздин атыңыз*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Тема*"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Сиздин телефон номериңиз"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Билдирүү*"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Жөнөтүү</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import TranslatedText from "../components/TranslatedText";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>
        <TranslatedText id="footer_h1" />
      </h1>

      <div className="footer-content">
       
        <div className="footer-left"></div>

       
        <div className="footer-icons">
          <a
            href="https://instagram.com/umra.kyzmatsayakat"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://facebook.com/kyzmatsayakatbish"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://kyzmatsayakat.kg"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGlobe size={20} />
          </a>
          <a
            href="https://youtube.com/@umra.kyzmatsayakat"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://wa.me/996505400900"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

      
        <div className="footer-right">
          <p>Суроолор болсо, кайрылыңыз 👇</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value.trim();
              const phone = e.target.phone.value.trim();

              if (!name || !phone) {
                alert("Атыңызды жана номериңизди жазыңыз!");
                return;
              }

              const message = `Саламатсызбы! Мен Туркия окуу боюнча толук маалымат алайын дедим эле.`;
              const encodedMessage = encodeURIComponent(message);
              const whatsappLink = `https://wa.me/996709051636?text=${encodedMessage}`;
              window.open(whatsappLink, "_blank");

              e.target.reset();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Атыңыз"
              className="footer-input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номериңиз"
              className="footer-input"
              required
            />
            <button type="submit" className="footer-button">
              Жөнөтүү
            </button>
          </form>
        </div>
      </div>

      <div className="pochta">
        {/* Email & Copyright */}
        <p>
          Электронная почта:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kushbakovkutman@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kushbakovkutman@gmail.com
          </a>
        </p>
        <p>
          <TranslatedText id="footer_p" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

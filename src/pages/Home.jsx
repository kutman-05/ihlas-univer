import React, { useRef, useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";
import TranslatedText from "../components/TranslatedText";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const galleryRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hideArrows, setHideArrows] = useState(false);
  const { lang } = useLanguage();

  const checkScrollButtons = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollLeft = gallery.scrollLeft;
    const scrollWidth = gallery.scrollWidth;
    const clientWidth = gallery.clientWidth;

    setAtStart(scrollLeft <= 10);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    setHideArrows(scrollWidth <= clientWidth + 10);
  };

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    checkScrollButtons();
    gallery.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      gallery.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  return (
    <section className="main-page">
      <div className="hero-section">
        <h1>
          <TranslatedText id="state_university_opportunity" />
        </h1>
        <p>
          <TranslatedText id="package_service_foreign_students" />
        </p>
      </div>

      <div className="why-us-section">
        <h2>
          <TranslatedText id="why_choose_us" />
        </h2>
        <div className="why-us-cards">
          <div className="why-us-card">
            <img
              src="https://i.postimg.cc/prKF1w2Q/photo-2025-06-25-23-28-11.jpg"
              alt="Иконка путешествия"
            />
            <h3>
              <TranslatedText id="education_key" />
            </h3>
            <p>
              <TranslatedText id="best_universities_message" />
            </p>
          </div>

          <div className="why-us-card">
            <img
              src="https://i.postimg.cc/6Ts8rYn7/photo-2025-06-25-23-28-15.jpg"
              alt="Иконка качества"
            />
            <h3>
              <TranslatedText id="quality_every_step" />
            </h3>
            <p>
              <TranslatedText id="accredited_programs_message" />
            </p>
          </div>

          <div className="why-us-card">
            <img
              src="https://i.postimg.cc/y8LvPZp1/photo-2025-06-25-23-35-38.jpg"
              alt="Иконка поддержки"
            />
            <h3>
              <TranslatedText id="care_every_student" />
            </h3>
            <p>
              <TranslatedText id="individual_help_message" />
            </p>
          </div>

          <div className="why-us-card">
            <img
              src="https://i.postimg.cc/jS0fPd48/photo-2025-06-25-23-28-19.jpg"
              alt="Иконка доступности"
            />
            <h3>
              <TranslatedText id="opportunities_available" />
            </h3>
            <p>
              <TranslatedText id="scholarships_available_message" />
            </p>
          </div>
        </div>
      </div>

      <div className={`image-gallery-wrapper ${hideArrows ? "centered" : ""}`}>
        {!hideArrows && (
          <button
            className={`slider-btn left ${atStart ? "disabled" : ""}`}
            onClick={() => scrollGallery("left")}
            disabled={atStart}
          >
            ◀
          </button>
        )}
        <div className="image-gallery" ref={galleryRef}>
          {[
            "8tddEMkVNzI",
            "Bn_Ulk7MOzk",
            "8tce5TqnDgU",
            "TwQUdbw4__4",
            "8tddEMkVNzI",
            "Bn_Ulk7MOzk",
            "8tce5TqnDgU",
            "TwQUdbw4__4",
          ].map((id) => (
            <iframe
              key={id}
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        {!hideArrows && (
          <button
            className={`slider-btn right ${atEnd ? "disabled" : ""}`}
            onClick={() => scrollGallery("right")}
            disabled={atEnd}
          >
            ▶
          </button>
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Kyzmat Sayakat. Все права защищены.</p>
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
      </footer>
    </section>
  );
};

export default Home;

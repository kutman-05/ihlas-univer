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
  const embedRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const loadInstagramEmbedScript = () => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    checkScrollButtons();
    gallery.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    loadInstagramEmbedScript();

    return () => {
      gallery.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const handleEmbedClick = (clickedIndex) => {
    if (activeIndex === clickedIndex) return;

    embedRefs.current.forEach((ref, i) => {
      if (ref && i !== clickedIndex) {
        const iframe = ref.querySelector("iframe");
        if (iframe) {
          const src = iframe.src;
          iframe.src = src;
        }
      }
    });
    setActiveIndex(clickedIndex);
  };

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

        <div
          className="video-gallery"
          ref={galleryRef} // Мына ушуну коштук
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "1rem 0",
          }}
        >
          {[
            "/videos/Видео WhatsApp 2025-08-06 в 03.12.32_5bafca1e.mp4",
            "/videos/Видео WhatsApp 2025-08-06 в 03.12.16_ba93c885.mp4",
            "/videos/Видео WhatsApp 2025-08-06 в 03.12.33_914cd10a.mp4",
            ,
          ].map((src, index) => (
            <video
              key={index}
              src={src}
              width={300}
              height={400}
              controls
              style={{ minWidth: 300, borderRadius: "10px" }}
            />
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
    </section>
  );
};

export default Home;

// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import "./header.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations.json";
import TranslatedText from "./TranslatedText";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  const t = (key) => {
    return translations[key] && translations[key][lang]
      ? translations[key][lang]
      : key;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="header">
      <nav className="nav" ref={dropdownRef}>
        <div className="logo">
          <Link to="/">ИХЛАС</Link>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="dropdown-btn"
              onClick={() => toggleDropdown("services")}
            >
              {t("our_services")} <SlArrowDown />
            </button>
            {activeDropdown === "services" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/umrah">
                    💼 {t("Биз сунуштаган билим багыттары")}
                  </Link>
                </li>
                <li>
                  <Link to="/services/hajj">
                    📌 {t("Сиз үчүн даярдалган мүмкүнчүлүктөр")}
                  </Link>
                </li>
                <li>
                  <Link to="/services/group-tours">
                    🎓 {t("Окуу боюнча негизги кызматтарыбыз")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="dropdown-btn"
              onClick={() => toggleDropdown("about")}
            >
              {t("Биз жөнүндө")} <SlArrowDown />
            </button>
            {activeDropdown === "about" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about">📖 {t("Биздин тарыхыбыз")}</Link>
                </li>
                <li>
                  <Link to="/about/team">
                    👩‍🏫 {t("Окутуучулар жана команда")}
                  </Link>
                </li>
                <li>
                  <Link to="/about/partners">
                    🤝 {t("Өнөктөштөр жана кызматташтык")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="dropdown-btn"
              onClick={() => toggleDropdown("university")}
            >
              {t("Университет")} <SlArrowDown />
            </button>
            {activeDropdown === "university" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/fact">{t("Кызыктуу фактылар")}</Link>
                </li>
                <li>
                  <Link to="/university">{t("Университеттер")}</Link>
                </li>
                <li>
                  <Link to="/student">{t("Студенттер")}</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="contact-lang-wrapper"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Link to="/contact">
              <TranslatedText id="contact" />
            </Link>
            <div className="lang-switcher">
              <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="ky">Кыргызча</option>
                <option value="ru">Русский</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import "./header.css";
import { useLanguage } from "../context/LanguageContext";



const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { lang, setLang } = useLanguage();


  const handleLangChange = (e) => {
    setLang(e.target.value);
  };
  // Тил тандоо үчүн стейт (азыр эч кандай логика жок, жөн гана тандоону сактайт)
  // const [lang, setLang] = useState("ru");

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

  // Тил тандоодо өзгөрүүнү кармоо
  // const handleLangChange = (e) => {
  //   setLang(e.target.value);
  //   // Кийин бул жерде котормочу API чакырыла турган болушу мүмкүн
  // };

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
              Биздин шарттар <SlArrowDown />
            </button>
            {activeDropdown === "services" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/umrah">
                    💼 Биз сунуштаган билим багыттары
                  </Link>
                </li>
                <li>
                  <Link to="/services/hajj">
                    📌 Сиз үчүн даярдалган мүмкүнчүлүктөр
                  </Link>
                </li>
                <li>
                  <Link to="/services/group-tours">
                    🎓 Окуу боюнча негизги кызматтарыбыз
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
              Биз жөнүндө <SlArrowDown />
            </button>
            {activeDropdown === "about" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about">📖 Биздин тарыхыбыз</Link>
                </li>
                <li>
                  <Link to="/about/team">👩‍🏫 Окутуучулар жана команда</Link>
                </li>
                <li>
                  <Link to="/about/partners">
                    🤝 Өнөктөштөр жана кызматташтык
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
              Университет
              <SlArrowDown />
            </button>
            {activeDropdown === "university" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/fact">Кызыктуу фактылар</Link>
                </li>
                <li>
                  <Link to="/university">Университеттер</Link>
                </li>
                <li>
                  <Link to="/student">Студенттер</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="contact-lang-wrapper"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Link to="/contact">Контакты</Link>

            {/* Тил тандоочу select */}
          </li>
          <div className="lang-switcher">
            <select value={lang} onChange={handleLangChange}>
              <option value="ky">Кыргызча</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

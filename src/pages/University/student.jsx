import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import TranslatedText from "../../components/TranslatedText";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom"; // <-- Шилтеме үчүн

const Student = () => {
  const { lang } = useLanguage();

  return (
    <section className="page student-page">
      <h1>
        <TranslatedText id="student_page_title" />
      </h1>

      {/* Университеттер жана атактуу студенттер */}
      <div className="top-students-section">
        <h2>
          <TranslatedText id="top_students_title" />
        </h2>
        <ul className="top-students-list">
          <li>
            <strong>Harvard University:</strong> Mark Zuckerberg – Facebook
            негиздөөчүсү <br />
            <Link to="/students/zuckerberg">Кененирээк…</Link>
          </li>
          <li>
            <strong>Stanford University:</strong> Larry Page – Google
            негиздөөчүсү <br />
            <Link to="/students/page">Кененирээк…</Link>
          </li>
          <li>
            <strong>MIT:</strong> Kofi Annan – БУУнун мурдагы баш катчысы <br />
            <Link to="/students/annan">Кененирээк…</Link>
          </li>
          <li>
            <strong>Oxford University:</strong> Stephen Hawking – атактуу физик{" "}
            <br />
            <Link to="/students/hawking">Кененирээк…</Link>
          </li>
          <li>
            <strong>Cambridge University:</strong> Isaac Newton – улуу илимпоз{" "}
            <br />
            <Link to="/students/newton">Кененирээк…</Link>
          </li>
          <li>
            <strong>Princeton University:</strong> Jeff Bezos – Amazon
            негиздөөчүсү <br />
            <Link to="/students/bezos">Кененирээк…</Link>
          </li>
          <li>
            <strong>Yale University:</strong> Hillary Clinton – АКШнын мурдагы
            мамлекеттик катчысы <br />
            <Link to="/students/clinton">Кененирээк…</Link>
          </li>
          <li>
            <strong>Columbia University:</strong> Barack Obama – АКШнын
            экс-президенти <br />
            <Link to="/students/obama">Кененирээк…</Link>
          </li>
          <li>
            <strong>Tokyo University:</strong> Yukio Hatoyama – Жапониянын
            премьер-министри <br />
            <Link to="/students/hatoyama">Кененирээк…</Link>
          </li>
          <li>
            <strong>ETH Zurich:</strong> Albert Einstein – атактуу физик жана
            Нобель лауреаты <br />
            <Link to="/students/einstein">Кененирээк…</Link>
          </li>
        </ul>
      </div>

      <div className="student-contact">
        <h2>
          <TranslatedText id="contact1" />
        </h2>
        <div className="social-icons">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Student;

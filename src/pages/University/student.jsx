import React from "react";

import TranslatedText from "../../components/TranslatedText";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom"; // <-- Шилтеме үчүн
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Сүрөтчөлөр үчүн

const Student = () => {
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
            <strong>Harvard University:</strong> Марк Цукерберг — Facebook
            социалдык тармагынын негиздөөчүсү. <br />
            <Link to="/students/zuckerberg">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Stanford University:</strong> Ларри Пейдж — Google издөө
            системасынын түзүүчүсү. <br />
            <Link to="/students/page">Толук маалымат…</Link>
          </li>
          <li>
            <strong>MIT:</strong> Кофи Аннан — Бириккен Улуттар Уюмунун мурдагы
            баш катчысы. <br />
            <Link to="/students/annan">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Oxford University:</strong> Стивен Хокинг — дүйнөгө таанымал
            физик жана космология илимин өнүктүргөн илимпоз. <br />
            <Link to="/students/hawking">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Cambridge University:</strong> Айзек Ньютон — илимдин
            көрүнүктүү таланты, гравитация мыйзамын ачкан илимпоз. <br />
            <Link to="/students/newton">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Princeton University:</strong> Джефф Безос — Amazon
            компаниясынын негиздөөчүсү жана дүйнөлүк бизнес лидери. <br />
            <Link to="/students/bezos">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Yale University:</strong> Хиллари Клинтон — АКШнын мурдагы
            мамлекеттик катчысы жана коомдук ишмер. <br />
            <Link to="/students/clinton">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Columbia University:</strong> Барак Обама — АКШнын мурдагы
            президенти жана коомдук реформалардын демилгечиси. <br />
            <Link to="/students/obama">Толук маалымат…</Link>
          </li>
          <li>
            <strong>Tokyo University:</strong> Юкио Хатояма — Жапониянын мурдагы
            премьер-министри. <br />
            <Link to="/students/hatoyama">Толук маалымат…</Link>
          </li>
          <li>
            <strong>ETH Zurich:</strong> Альберт Эйнштейн — дүйнөгө таанымал
            физик жана Нобель сыйлыгынын лауреаты. <br />
            <Link to="/students/einstein">Толук маалымат…</Link>
          </li>
        </ul>
      </div>

      <div className="student-contact">
        <h2>
          <TranslatedText id="contact1" />
        </h2>
        <p>
          Биз менен байланышууну кааласаңыз, төмөнкү социалдык тармактар аркылуу
          байланышыңыз:
        </p>
        <div className="social-icons">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Student;

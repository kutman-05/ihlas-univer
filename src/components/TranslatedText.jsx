import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/translations.json";

const TranslatedText = ({ id, text }) => {
  const { lang } = useLanguage();
  const content = id || text;
  return translations[content] && translations[content][lang]
    ? translations[content][lang]
    : content;
};

export default TranslatedText;

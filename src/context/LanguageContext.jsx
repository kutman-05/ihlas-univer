// ✅ 3. Header.js ичинде ТИЛ ТАНДОО жана КОНТЕКСТ САКТОО (ТИЛ)
// 🗂 src/context/LanguageContext.js

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ky");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);



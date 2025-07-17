// import { useEffect, useState, useRef } from "react";
// import debounce from "lodash.debounce";

// const TranslatedText = ({ text, lang }) => {
//   const [translated, setTranslated] = useState(text);

//   // debounce функциясын useRef менен сактоо
//   const debouncedTranslate = useRef(
//     debounce(async (text, lang, setTranslated, controller) => {
//       try {
//         const response = await fetch("https://libretranslate.de/translate", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             q: text,
//             source: "ky",
//             target: lang,
//             format: "text",
//           }),
//           signal: controller.signal,
//         });

//         const data = await response.json();

//         if (data.translatedText) {
//           setTranslated(data.translatedText);
//         } else {
//           setTranslated(text);
//         }
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           console.error("Ката чыкты:", error);
//           setTranslated(text);
//         }
//       }
//     }, 500) // 500 мсек кечигүү
//   ).current;

//   useEffect(() => {
//     if (!lang || lang === "ky") {
//       setTranslated(text);
//       return;
//     }

//     const controller = new AbortController();

//     debouncedTranslate(text, lang, setTranslated, controller);

//     return () => {
//       controller.abort();
//       debouncedTranslate.cancel();
//     };
//   }, [text, lang, debouncedTranslate]);

//   return <>{translated}</>;
// };

// export default TranslatedText;

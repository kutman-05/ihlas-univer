// ✅ 1. ТИЛ КОТОРУУ ФУНКЦИЯСЫН АЛА ТУРГАН ФАЙЛ ТҮЗӨЛҮ
// 🗂 src/utils/translate.js

export async function translateText(text, source = "ky", target = "en") {
  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
        format: "text",
      }),
    });

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // ката болсо оригинал текстти кайтар
  }
}

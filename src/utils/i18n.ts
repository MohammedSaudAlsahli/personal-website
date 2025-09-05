import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";
const savedDir =
  localStorage.getItem("dir") || (savedLang === "ar" ? "rtl" : "ltr");

document.documentElement.dir = savedDir;

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: "en",
    backend: {
      loadPath: (lng: string) =>
        `https://raw.githubusercontent.com/MohammedSaudAlsahli/locals/refs/heads/main/personal-website/${lng}.json?v=${Date.now()}`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

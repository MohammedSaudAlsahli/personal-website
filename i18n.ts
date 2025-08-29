import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import content from "./src/assets/csmLine.json";

// نحوّل الملف الواحد إلى resources
const resources = {
  en: {
    translation: {
      aboutData: content.aboutData,
      experienceICONS: content.experienceICONS,
      footerICONS: content.footerICONS,
      links: content.links,
      projectsData: content.projectsData,
      workExperience: content.workExperience,
    },
  },
  ar: {
    translation: {
      aboutData: content.aboutData,
      experienceICONS: content.experienceICONS,
      footerICONS: content.footerICONS,
      links: content.links,
      projectsData: content.projectsData,
      workExperience: content.workExperience,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

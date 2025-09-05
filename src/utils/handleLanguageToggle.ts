import type { i18n as I18nType } from "i18next";

interface ToggleProps {
  i18n: I18nType;
  toggleDirection: () => void;
}

export const handleToggle = ({ i18n, toggleDirection }: ToggleProps) => {
  const isArabic = i18n.language === "ar";
  const newLang = isArabic ? "en" : "ar";
  const newDir = isArabic ? "ltr" : "rtl";

  i18n.changeLanguage(newLang).then(() => {
    localStorage.setItem("lang", newLang);
    localStorage.setItem("dir", newDir);

    document.documentElement.dir = newDir;

    toggleDirection();
  });
};

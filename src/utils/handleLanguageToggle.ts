import type { i18n as I18nType } from "i18next";

interface ToggleProps {
  dir: "ltr" | "rtl";
  i18n: I18nType;
  toggleDirection: () => void;
}

export const handleToggle = ({ dir, i18n, toggleDirection }: ToggleProps) => {
  if (dir === "rtl") {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage("ar");
  }
  toggleDirection();
};

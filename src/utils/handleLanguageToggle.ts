export const handleToggle = ({ dir, i18n, toggleDirection }) => {
  if (dir === "rtl") {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage("ar");
  }
  toggleDirection();
};

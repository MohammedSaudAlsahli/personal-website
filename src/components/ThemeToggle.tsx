import { Button, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Button
      onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
      size="xs"
    >
      {colorScheme === "dark" ? <FaSun size="24px" /> : <FaMoon size="24px" />}
    </Button>
  );
};

import { Button, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Button
      onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
      size="compact-sm"
      variant="transparent"
      //   color="dark"
    >
      {colorScheme === "dark" ? (
        <FaSun size="24px" color="white" />
      ) : (
        <FaMoon size="24px" color="black" />
      )}
    </Button>
  );
};

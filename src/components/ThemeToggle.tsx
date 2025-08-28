import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { AiOutlineSun, AiFillMoon } from "react-icons/ai";
export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
      size="lg"
      color="gray"
      variant="default"
      title={"Theme toggle"}

    >
      {colorScheme === "dark" ? (
        <AiOutlineSun size={18} />
      ) : (
        <AiFillMoon size={18} />
      )}
    </ActionIcon>
  );
};

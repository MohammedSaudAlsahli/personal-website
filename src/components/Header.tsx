import { ThemeToggle } from "./ThemeToggle";
import { NavigationProgress } from "@mantine/nprogress";

import { Box, Group, Text, Flex } from "@mantine/core";
export const Header = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      p="md"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        borderBottom: "1px solid var(--mantine-color-gray-7)",
        boxShadow: "var(--mantine-shadow-sm)",
      }}
    >
      <Text fw={700}>LOGO</Text>

      <Text>Home</Text>
      <Text>About</Text>
      <Text>Contact</Text>

      <ThemeToggle />
    </Flex>
  );
};

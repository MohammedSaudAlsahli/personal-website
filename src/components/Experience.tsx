import { Container, Group, Stack, ThemeIcon, Title } from "@mantine/core";
import { SiHtml5, SiTailwindcss, SiPython } from "react-icons/si";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";

const ICONS = [
  { Icon: SiHtml5, title: "HTML" },
  { Icon: FaJsSquare, title: "Javascript" },
  { Icon: RiReactjsFill, title: "React.js" },
  { Icon: SiTailwindcss, title: "Tailwind" },
  { Icon: RiNextjsFill, title: "Next.js" },
  { Icon: SiPython, title: "Python" },
];

export const Experience = () => {
  const themeIcons = ICONS.map(({ Icon, title }) => (
    <ThemeIcon
      size={"lg"}
      key={title}
      color={
        "light-dark(var(--mantine-color-black), var(--mantine-color-white))"
      }
      variant={"transparent"}
      title={title}
    >
      <Icon size={32} />
    </ThemeIcon>
  ));

  return (
    <Container my={"xl"} py={"xl"}>
      <Stack align={"center"} gap={"xl"}>
        <Title order={2} ta={"center"}>
          EXPERIENCED WITH
        </Title>
        <Group gap={"lg"}>{themeIcons}</Group>
      </Stack>
    </Container>
  );
};

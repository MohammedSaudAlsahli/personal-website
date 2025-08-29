import { ThemeIcon, Text, Center, Group } from "@mantine/core";
import { SiHtml5, SiTailwindcss, SiPython } from "react-icons/si";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";

const Icons = [
  { Icon: SiHtml5, title: "HTML" },
  { Icon: FaJsSquare, title: "Javascript" },
  { Icon: RiReactjsFill, title: "React.js" },
  { Icon: SiTailwindcss, title: "Tailwind" },
  { Icon: RiNextjsFill, title: "Next.js" },
  { Icon: SiPython, title: "Python" },
];
const themeIcon = Icons.map(({ Icon, title }) => (
  <ThemeIcon
    size={"lg"}
    key={title}
    color={"gray"}
    variant={"transparent"}
    title={title}
  >
    <Icon size={28} />
  </ThemeIcon>
));

export const Experience = () => {
  return (
    <Center display={"flex"} style={{ flexDirection: "column", gap: "3rem" }}>
      <Text fw={"bold"} size={"xl"}>
        EXPREIENCED WITH
      </Text>
      <Group>{themeIcon}</Group>
    </Center>
  );
};

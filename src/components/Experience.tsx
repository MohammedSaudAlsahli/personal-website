import { Container, Group, Stack, ThemeIcon, Title } from "@mantine/core";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiHtml5, SiPython, SiTailwindcss } from "react-icons/si";

const experienceICONS = [
	{ Icon: SiHtml5, title: "HTML" },
	{ Icon: FaJsSquare, title: "Javascript" },
	{ Icon: RiReactjsFill, title: "React.js" },
	{ Icon: SiTailwindcss, title: "Tailwind" },
	{ Icon: RiNextjsFill, title: "Next.js" },
	{ Icon: SiPython, title: "Python" },
];

const themeIcons = experienceICONS.map(({ Icon, title }) => (
	<ThemeIcon
		size={"lg"}
		key={title}
		color={"light-dark(var(--mantine-color-black), var(--mantine-color-white))"}
		variant={"transparent"}
		title={title}
	>
		<Icon size={32} />
	</ThemeIcon>
));

export const Experience = () => {
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

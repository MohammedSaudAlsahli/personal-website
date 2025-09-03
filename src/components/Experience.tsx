import { Container, Group, Stack, ThemeIcon, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiHtml5, SiPython, SiTailwindcss } from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
	SiHtml5,
	FaJsSquare,
	RiReactjsFill,
	SiTailwindcss,
	RiNextjsFill,
	SiPython,
};

export const Experience = () => {
	const { t } = useTranslation();
	const icons = t("experience.container.icons", { returnObjects: true }) as {
		icon: string;
		title: string;
	}[];

	const themeIcons = icons.map(({ icon, title }) => {
		const Icon = iconMap[icon];
		return (
			<ThemeIcon
				size="lg"
				key={title}
				color="light-dark(var(--mantine-color-black), var(--mantine-color-white))"
				variant="transparent"
				title={title}
			>
				{Icon && <Icon size={32} />}
			</ThemeIcon>
		);
	});
	return (
		<Container my={"xl"} py={"xl"} component={"section"} id={"experience"}>
			<Stack align={"center"} gap={"xl"}>
				<Title order={2} ta={"center"}>
					{t("experience.container.title")}
				</Title>
				<Group gap={"lg"}>{themeIcons}</Group>
			</Stack>
		</Container>
	);
};

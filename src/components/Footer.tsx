import { ActionIcon, Box, Container, Group, Image, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import LOGO from "../assets/full_logo.png";
import classes from "./FooterSocial.module.css";

const iconMap: Record<string, React.ElementType> = {
	AiOutlineGithub,
	AiFillLinkedin,
	AiOutlineX,
};

export const Footer = () => {
	const { t } = useTranslation();
	const icons = t("footer.icons", { returnObjects: true }) as {
		icon: string;
		href: string;
		title: string;
	}[];
	const actionIcons = icons.map(({ icon, href, title }) => {
		const Icon = iconMap[icon];
		return (
			<ActionIcon
				size={"lg"}
				key={title}
				variant={"default"}
				component={"a"}
				href={href}
				target={"_blank"}
				rel={"noopener noreferrer"}
				title={title}
			>
				{Icon && <Icon size={18} />}
			</ActionIcon>
		);
	});
	const year = new Date().getFullYear();
	return (
		<Box component={"footer"} className={classes.footer} mt={"auto"}>
			<Container className={classes.inner}>
				<Image radius="md" src={null} h={50} w={"auto"} fallbackSrc={LOGO} />
				<Text>
					&copy; {t("footer.rights")} {year}
				</Text>
				<Group
					gap={"sm"}
					className={classes.links}
					justify={"flex-end"}
					wrap={"nowrap"}
				>
					{actionIcons}
				</Group>
			</Container>
		</Box>
	);
};

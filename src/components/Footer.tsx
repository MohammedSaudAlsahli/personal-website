import { ActionIcon, Box, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import classes from "./FooterSocial.module.css";

const ICONS = [
	{
		Icon: AiOutlineGithub,
		href: "https://www.github.com/MohammedSaudAlsahli",
		title: "Github",
	},
	{ Icon: AiOutlineX, href: "https://www.x.com/MSaudAlsahli", title: "X" },
	{
		Icon: AiFillLinkedin,
		href: "https://www.linkedin.com/in/mohammed-saud-alsahli/",
		title: "Linkedin",
	},
];

const actionIcons = ICONS.map(({ Icon, href, title }) => (
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
		<Icon size={18} />
	</ActionIcon>
));

export const Footer = () => {
	return (
		<Box component={"footer"} className={classes.footer} mt={"auto"}>
			<Container className={classes.inner}>
				<MantineLogo size={28} />
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

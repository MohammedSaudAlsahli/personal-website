import { Box, Burger, Collapse, Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LOGO from "../assets/short_logo.png";
import classes from "./HeaderSimple.module.css";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
	const { t } = useTranslation();
	const links = t("header.links", { returnObjects: true }) as {
		link: string;
		label: string;
	}[];

	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<a
			key={link.label}
			title={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				const section = document.querySelector(link.link);
				if (section) {
					section.scrollIntoView({ behavior: "smooth" });
				}
				setActive(link.link);
				close();
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Box
			component={"header"}
			className={classes.header}
			style={{
				position: "sticky",
				top: 0,
				zIndex: 1000,
			}}
		>
			<Container size={"md"} className={classes.inner}>
				<Image radius="md" src={null} h={35} w={"auto"} fallbackSrc={LOGO} />
				<Group gap={"xl"} visibleFrom={"xs"} className={classes.links}>
					{items}
				</Group>
				<Group>
					<ThemeToggle />
					<LanguageToggle />
					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom={"xs"}
						size={"sm"}
					/>
				</Group>
			</Container>
			<Collapse in={opened} hiddenFrom={"xs"}>
				{items}
			</Collapse>
		</Box>
	);
};

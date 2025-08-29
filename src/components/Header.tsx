import { Box, Burger, Collapse, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useState } from "react";
import classes from "./HeaderSimple.module.css";
import { ThemeToggle } from "./ThemeToggle";

const links = [
	{ link: "/about", label: "About" },
	{ link: "/expreience", label: "Expreience" },
	{ link: "/projects", label: "Projects" },
	{ link: "/contact", label: "Contact" },
];

export const Header = () => {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				close();
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Box component={"header"} className={classes.header}>
			<Container size={"md"} className={classes.inner}>
				<MantineLogo size={28} />
				<Group gap={"xl"} visibleFrom={"xs"} className={classes.links}>
					{items}
				</Group>
				<Group>
					<ThemeToggle />
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

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

export const ThemeToggle = () => {
	const { colorScheme, setColorScheme } = useMantineColorScheme();
	const toggleColorScheme = () =>
		setColorScheme(colorScheme === "dark" ? "light" : "dark");

	return (
		<ActionIcon
			onClick={toggleColorScheme}
			size={"lg"}
			variant={"default"}
			title={"Toggle theme"}
		>
			{colorScheme === "dark" ? (
				<AiOutlineSun size={18} />
			) : (
				<AiOutlineMoon size={18} />
			)}
		</ActionIcon>
	);
};

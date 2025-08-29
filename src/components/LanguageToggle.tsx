import { ActionIcon, useDirection } from "@mantine/core";

export const LanguageToggle = () => {
	const { toggleDirection, dir } = useDirection();
	return (
		<ActionIcon
			onClick={toggleDirection}
			variant="default"
			radius="md"
			size="lg"
		>
			{dir === "rtl" ? "AR" : "EN"}
		</ActionIcon>
	);
};

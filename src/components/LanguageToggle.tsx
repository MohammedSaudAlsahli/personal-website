import { ActionIcon, useDirection } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { handleToggle } from "../utils/handleLanguageToggle";

export const LanguageToggle = () => {
	const { i18n } = useTranslation();
	const { toggleDirection, dir } = useDirection();

	const toggle = () => handleToggle({ i18n, toggleDirection });

	return (
		<ActionIcon onClick={toggle} variant="default" radius="md" size="lg">
			{dir === "rtl" ? "EN" : "AR"}
		</ActionIcon>
	);
};

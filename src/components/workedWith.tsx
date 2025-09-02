import {
	Avatar,
	Box,
	Container,
	Stack,
	Text,
	Timeline,
	Title,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

export const WorkExperience = () => {
	const { t } = useTranslation();
	const companies = t("workExperience.companies", { returnObjects: true }) as {
		companyName: string;
		companyLogo: string;
		companyMainLogo: string;
		roles: {
			position: string;
			period: string;
		}[];
	}[];
	const company = companies.map(({ companyName, companyLogo, roles }) => (
		<Timeline.Item
			key={companyName}
			bullet={<Avatar src={companyLogo} size={24} />}
			title={companyName}
		>
			<Stack gap="xs" mt="xs" title={"roles"}>
				{roles.map(({ position, period }) => (
					<Box key={position}>
						<Text size="sm" fw={500} title={position}>
							{position}
						</Text>
						<Text c="dimmed" size="xs" title={period}>
							{period}
						</Text>
					</Box>
				))}
			</Stack>
		</Timeline.Item>
	));
	return (
		<Container my={"xl"} py={"xl"}>
			<Stack align={"center"} gap={"xl"}>
				<Title order={2} ta={"center"}>
					{t("workExperience.workedIn")}
				</Title>
				<Timeline
					active={companies.length}
					bulletSize={30}
					lineWidth={2}
					radius={"xs"}
				>
					{company}
				</Timeline>
			</Stack>
		</Container>
	);
};

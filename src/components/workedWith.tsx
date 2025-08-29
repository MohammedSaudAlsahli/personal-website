import {
	Avatar,
	Box,
	Container,
	Stack,
	Text,
	Timeline,
	Title,
} from "@mantine/core";

const workExperience = [
	{
		companyName: "RewaaTech",
		companyLogo:
			"https://www.rewaatech.com/wp-content/uploads/2020/03/facicon-1.png",
		companyMainLogo:
			"https://www.rewaatech.com/wp-content/uploads/2020/03/new-logo.png",
		roles: [
			{
				position: "Sales",
				period: "Feb 2024 - Aug 2024",
			},
			{
				position: "Sales team lead",
				period: "Aug 2024 - Feb 2025",
			},
		],
	},
	{
		companyName: "Retm",
		companyLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/63ba01faa5f15f7a996a8d6d_favicon-32x32.png",
		companyMainLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/6402872ec142e23e71efebb1_Vectors-Wrapper.svg",
		roles: [
			{
				position: "Account Manager",
				period: "Feb 2025 - Present",
			},
		],
	},
	{
		companyName: "Retm",
		companyLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/63ba01faa5f15f7a996a8d6d_favicon-32x32.png",
		companyMainLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/6402872ec142e23e71efebb1_Vectors-Wrapper.svg",
		roles: [
			{
				position: "Account Manager",
				period: "Feb 2025 - Present",
			},
		],
	},
	{
		companyName: "Retm",
		companyLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/63ba01faa5f15f7a996a8d6d_favicon-32x32.png",
		companyMainLogo:
			"https://cdn.prod.website-files.com/63b47a4f00ab98da785b4d1e/6402872ec142e23e71efebb1_Vectors-Wrapper.svg",
		roles: [
			{
				position: "Account Manager",
				period: "Feb 2025 - Present",
			},
		],
	},
];

const companies = workExperience.map(({ companyName, companyLogo, roles }) => (
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

export const WorkExperience = () => {
	return (
		<Container my={"xl"} py={"xl"}>
			<Stack align={"center"} gap={"xl"}>
				<Title order={2} ta={"center"}>
					Worked in
				</Title>
				<Timeline
					active={workExperience.length}
					bulletSize={30}
					lineWidth={2}
					radius={"xs"}
				>
					{companies}
				</Timeline>
			</Stack>
		</Container>
	);
};

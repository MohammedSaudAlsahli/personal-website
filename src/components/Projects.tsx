import {
	Badge,
	Button,
	Card,
	Container,
	Group,
	Image,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { ContactForm } from "./ContactForm";

export const Projects = () => {
	const { t } = useTranslation();
	const project = t("projects.project", { returnObjects: true }) as {
		title: string;
		image: string;
		description: string;
		tags: string[];
		githubUrl: string;
		liveUrl: string | null;
	}[];

	const card = project.map((project) => (
		<Card
			key={project.title}
			shadow={"sm"}
			padding={"lg"}
			radius={"md"}
			withBorder
			style={{ display: "flex", flexDirection: "column", height: 360 }}
		>
			<Card.Section>
				<Image
					src={project.image || "https://placehold.net/default.svg"}
					height={160}
					alt={project.title || t("projects.placeholder")}
				/>
			</Card.Section>

			<Group justify={"space-between"} mt={"md"} mb={"xs"}>
				<Text fw={500}>{project.title || t("projects.title")}</Text>
				<Group gap={"xs"}>
					{project.tags.map((tag) => (
						<Badge key={tag || "tag"}>{tag || "Tag"}</Badge>
					))}
				</Group>
			</Group>

			<Text size={"sm"} c={"dimmed"} lineClamp={4}>
				{project.description || t("projects.description")}
			</Text>

			<Group mt={"md"}>
				{project.githubUrl && (
					<Button
						component={"a"}
						href={project.githubUrl || "#"}
						variant={"default"}
						leftSection={<AiOutlineGithub size={16} />}
						target="_blank"
						rel="noopener noreferrer"
					>
						{t("projects.github")}
					</Button>
				)}
				{project.liveUrl && (
					<Button
						component={"a"}
						href={project.liveUrl || "#"}
						leftSection={<TbWorldWww size={16} />}
					>
						{t("projects.demo")}
					</Button>
				)}
			</Group>
		</Card>
	));

	return (
		<Container my={"xl"} py={"xl"} component={"section"} id={"projects"}>
			<Title order={2} ta={"center"} mb={"xl"}>
				{t("projects.myProjects")}
			</Title>
			<SimpleGrid cols={{ base: 1, sm: 2 }}>
				{card}
				<Card shadow={"sm"} padding={"lg"} radius={"md"} withBorder>
					<ContactForm />
				</Card>
			</SimpleGrid>
		</Container>
	);
};

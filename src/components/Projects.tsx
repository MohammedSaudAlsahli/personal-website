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
import { AiOutlineGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const projectsData = [
	{
		title: "Project One",
		image:
			"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
		description:
			"A cool project I built using modern technologies to solve a real-world problem. It features a robust backend and a sleek, responsive frontend.",
		tags: ["React", "TypeScript", "Mantine"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		title: "Project Two",
		image:
			"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
		description:
			"Another awesome project that showcases my skills in backend and frontend development, with a focus on performance and user experience.",
		tags: ["Next.js", "Node.js", "PostgreSQL"],
		githubUrl: "#",
		liveUrl: null,
	},
	{
		title: "Project Three",
		image:
			"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png",
		description:
			"An experimental project exploring the capabilities of AI and machine learning in a practical application. Built for scalability and fun.",
		tags: ["Python", "FastAPI", "AI"],
		githubUrl: "#",
		liveUrl: "#",
	},
];

const cards = projectsData.map((project) => (
	<Card
		key={project.title}
		shadow={"sm"}
		padding={"lg"}
		radius={"md"}
		withBorder
	>
		<Card.Section>
			<Image src={project.image} height={160} alt={project.title} />
		</Card.Section>

		<Group justify={"space-between"} mt={"md"} mb={"xs"}>
			<Text fw={500}>{project.title}</Text>
			<Group gap={"xs"}>
				{project.tags.map((tag) => (
					<Badge key={tag}>{tag}</Badge>
				))}
			</Group>
		</Group>

		<Text size={"sm"} c={"dimmed"} lineClamp={4}>
			{project.description}
		</Text>

		<Group mt={"md"}>
			<Button
				component={"a"}
				href={project.githubUrl}
				variant={"default"}
				leftSection={<AiOutlineGithub size={16} />}
			>
				GitHub
			</Button>
			{project.liveUrl && (
				<Button
					component={"a"}
					href={project.liveUrl}
					leftSection={<TbWorldWww size={16} />}
				>
					Live Demo
				</Button>
			)}
		</Group>
	</Card>
));

export const Projects = () => {
	return (
		<Container my={"xl"} py={"xl"}>
			<Title order={2} ta={"center"} mb={"xl"}>
				My Projects
			</Title>
			<SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
		</Container>
	);
};

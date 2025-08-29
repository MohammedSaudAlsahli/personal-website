import { Box } from "@mantine/core";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/workedWith";

export const App = () => {
	return (
		<Box display={"flex"} mih={"100vh"} style={{ flexDirection: "column" }}>
			<Header />
			<About />
			<Experience />
			<WorkExperience />
			<Projects />
			<Footer />
		</Box>
	);
};

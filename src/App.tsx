import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Box } from "@mantine/core";
import { About } from "./components/About";

export const App = () => {
  return (
    <Box display={"flex"} mih={"100vh"} style={{ flexDirection: "column" }}>
      <Header />
      <About />
      <Experience />
      <Footer />
    </Box>
  );
};

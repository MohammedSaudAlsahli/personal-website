import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Box } from "@mantine/core";

export const App = () => {
  return (
    <Box display={"flex"} mih={"100vh"} style={{ flexDirection: "column" }}>
      <Header />
      <Experience />
      <Footer />
    </Box>
  );
};

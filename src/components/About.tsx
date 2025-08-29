import { Container, Stack, Text, Title } from "@mantine/core";

const aboutData = {
  catchyLine: "I build SaaS apps and experiment with AI models!",
  description:
    "I’m a passionate software developer exploring the intersection of AI and modern web development. My focus is on creating scalable SaaS applications and integrating AI-powered features to solve real-world problems.",
};

export const About = () => {
  return (
    <Container my="xl" py="xl">
      <Stack align="center" gap="xl">
        <Title order={1} ta="center">
          {aboutData.catchyLine}
        </Title>
        <Text size="lg" ta="center" maw={600}>
          {aboutData.description}
        </Text>
      </Stack>
    </Container>
  );
};

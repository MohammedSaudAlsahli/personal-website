import { Container, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const About = () => {
	const { t } = useTranslation();
	return (
		<Container my={"xl"} pb={"xl"}>
			<Stack align={"center"} gap={"xl"}>
				<Title order={1} ta={"center"}>
					{t("about.catchyLine")}
				</Title>
				<Text size={"lg"} ta={"center"} maw={600}>
					{t("about.description")}
				</Text>
			</Stack>
		</Container>
	);
};

/* import { Button, Container, Group, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fully featured
          </Text>{' '}
          React components and hooks library
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
  
#######
.wrapper {
  position: relative;
  box-sizing: border-box;
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-8));
}

.inner {
  position: relative;
  padding-top: 200px;
  padding-bottom: 120px;

  @media (max-width: $mantine-breakpoint-sm) {
    padding-bottom: 80px;
    padding-top: 80px;
  }
}

.title {
  font-family: Outfit, var(--mantine-font-family);
  font-size: 62px;
  font-weight: 500;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  color: light-dark(var(--mantine-color-black), var(--mantine-color-white));

  @media (max-width: $mantine-breakpoint-sm) {
    font-size: 42px;
    line-height: 1.2;
  }
}

.description {
  margin-top: var(--mantine-spacing-xl);
  font-size: 24px;

  @media (max-width: $mantine-breakpoint-sm) {
    font-size: 18px;
  }
}

.controls {
  margin-top: calc(var(--mantine-spacing-xl) * 2);

  @media (max-width: $mantine-breakpoint-sm) {
    margin-top: var(--mantine-spacing-xl);
  }
}

.control {
  height: 54px;
  padding-left: 38px;
  padding-right: 38px;

  @media (max-width: $mantine-breakpoint-sm) {
    height: 54px;
    padding-left: 18px;
    padding-right: 18px;
    flex: 1;
  }
}
*/

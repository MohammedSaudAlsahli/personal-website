import { AiOutlineX, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import { ActionIcon, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group
          gap={"sm"}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="default"
            component="a"
            href="https://www.github.com/MohammedSaudAlsahli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="default"
            component="a"
            href="https://www.x.com/MSaudAlsahli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineX size={18} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="default"
            component="a"
            href="https://www.linkedin.com/in/mohammed-saud-alsahli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

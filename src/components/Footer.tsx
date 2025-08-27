import { AiOutlineX, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import { ActionIcon, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";

export const Footer = () => {
  const Icons = [
    {
      Icon: AiOutlineGithub,
      href: "https://www.github.com/MohammedSaudAlsahli",
    },
    { Icon: AiOutlineX, href: "https://www.x.com/MSaudAlsahli" },
    {
      Icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/mohammed-saud-alsahli/",
    },
  ];
  const actionIcons = Icons.map(({ Icon, href }) => (
    <ActionIcon
      size="lg"
      color="gray"
      variant="default"
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={18} />
    </ActionIcon>
  ));
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
          {actionIcons}
          {/* <ActionIcon
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
          </ActionIcon> */}
        </Group>
      </Container>
    </div>
  );
};

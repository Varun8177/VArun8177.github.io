import { Box, Center, Heading, Show, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  MobileProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";

const Projects = () => {
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>
      <ProjectCards direction={"row"} />
      <ProjectCards direction={"row-reverse"} />
      <ProjectCards direction={"row"} />
      <ProjectCards direction={"row-reverse"} />
      {/* <Show breakpoint="(max-width: 760px)">
        <MobileProjectCard direction={"row"} />
        <MobileProjectCard direction={"row-reverse"} />
        <MobileProjectCard direction={"row"} />
        <MobileProjectCard direction={"row-reverse"} />
      </Show> */}
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard />
        <MediumProjectCard />
        <MediumProjectCard />
        <MediumProjectCard />
      </Show>
    </Box>
  );
};

export default Projects;